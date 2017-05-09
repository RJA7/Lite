import Program from './program';
import vertexShaderSource from './chuncks/texture.vert';
import fragmentShaderSource from './chuncks/texture.frag';
import Mat4 from '../geom/mat4';

const vertexNames = [
  `left`, `top`,
  `right`, `bottom`,
  `right`, `top`,
  `left`, `bottom`
];

const indicesMap = [0, 1, 2, 0, 1, 3];

let maxTextureImageUnits;

export default class TextureProgram extends Program {
  constructor(renderer) {
    const gl = renderer.gl;
    maxTextureImageUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    const fragmentSource = fragmentShaderSource.replace(/maxTextureImageUnits/gm, maxTextureImageUnits);

    super(gl, vertexShaderSource, fragmentSource);

    this.renderer = renderer;
    this.el = renderer.el;
    this.gl = gl;

    this.uniforms = {
      uProjectionMatrix: gl.getUniformLocation(this.program, `uProjectionMatrix`),
      uSamplers        : gl.getUniformLocation(this.program, `uSamplers`)
    };

    const attributes = this.attributes = {
      aPos           : gl.getAttribLocation(this.program, `aPos`),     // vertex local pos xy + texture pos zw
      aModelPos      : gl.getAttribLocation(this.program, `aModelPos`), // model world pos x y z + texture slot w
      aModelTransform: gl.getAttribLocation(this.program, `aModelTransform`)  // rotation scale matrix 2x2 world transform
    };

    const SIZE = 4;
    gl.vertexAttribPointer(attributes.aPos, 4, gl.FLOAT, false, SIZE * 12, 0);
    gl.vertexAttribPointer(attributes.aModelPos, 4, gl.FLOAT, false, SIZE * 12, SIZE * 4);
    gl.vertexAttribPointer(attributes.aModelTransform, 4, gl.FLOAT, false, SIZE * 12, SIZE * 8);
    gl.enableVertexAttribArray(attributes.aPos);
    gl.enableVertexAttribArray(attributes.aModelPos);
    gl.enableVertexAttribArray(attributes.aModelTransform);

    this.setUniforms();
    this.data = new Float32Array(8);
    this.indices = new Uint8Array(6);
  }

  setUniforms() {
    const uniforms = this.uniforms;
    const el = this.renderer.el;
    const gl = this.gl;

    gl.uniform1iv(uniforms.uSamplers, new Int32Array(maxTextureImageUnits).map((v, i) => i));
    gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, new Mat4().setCanvasProjection(el.width, el.height).value);
  }

  setAttributes(batch) {
    const gl = this.gl;
    const sprites = [];

    for (let i = 0, l = batch.length; i < l; i++) {
      sprites.push(...batch[i]);
    }

    let valuesLen = 48 * sprites.length;
    let data = this.data;
    let indices = this.indices;

    if (valuesLen !== data.length) {
      data = this.data = new Float32Array(valuesLen);

      let maxIndex = 4 * sprites.length;
      let len = 6 * sprites.length;
      indices = this.indices = maxIndex > 128 ? new Uint16Array(len) : new Uint8Array(len);
    }

    // attribute vec4 aPos; // local vertex pos should be multiplied by model transform + tex coords
    // attribute vec4 aModelPos; // sprite x y z world pos +  w = tex slot
    // attribute vec4 aModelTransform; // 2x2 matrix
    for (let i = 0, size = 0, iSize = 0, l = sprites.length, sprite; i < l; i++) {
      sprite = sprites[i];

      for (let j = 0, vertexNameX, vertexNameY, transform; j < 8; j += 2) {
        vertexNameX = vertexNames[j];
        vertexNameY = vertexNames[j + 1];
        transform = sprite.transform.value;

        data[size++] = sprite.localVertices[vertexNameX];
        data[size++] = sprite.localVertices[vertexNameY];
        data[size++] = sprite.texCoord[vertexNameX];
        data[size++] = sprite.texCoord[vertexNameY];

        data[size++] = transform[4];
        data[size++] = transform[5];
        data[size++] = sprite.worldZ;
        data[size++] = sprite.texSlot;

        data[size++] = transform[0];
        data[size++] = transform[1];
        data[size++] = transform[2];
        data[size++] = transform[3];
      }

      for (let j = 0; j < 6; j++) {
        indices[iSize++] = indicesMap[j] + i * 4;
      }
    }

    // state bind buffer
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    return indices;
  }

  render(objects, textures) {
    const batches = textures.createBatches(objects);
    const gl = this.gl;

    for (let i = 0, l = batches.length, indices, amount; i < l; i++) {
      textures.prepareBatch(batches[i]);
      indices = this.setAttributes(batches[i]);

      gl.drawElements(gl.TRIANGLES, indices.length, 
        indices.BYTES_PER_ELEMENT === 1 ? gl.UNSIGNED_BYTE : gl.UNSIGNED_SHORT, 0);
    }
  }
}
