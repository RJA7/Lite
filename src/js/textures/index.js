export default class Textures {
  constructor(renderer) {
    const gl = this.gl = renderer.gl;
    
    this.maxTextureImageUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    this.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    this.maxVertexTextureImageUnits = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);

    this.boundTextures = new Array(this.maxTextureImageUnits);
    this.glTextures = new Array(this.maxTextureImageUnits);
    this.pointer = 0;
    
    for (let i = 0, texture; i < this.maxTextureImageUnits; i++) {
      texture = gl.createTexture();
      this.glTextures[i] = texture;

      gl.activeTexture(gl[`TEXTURE${i}`]);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, renderer.el);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
  }

  createBatches(objects) {
    const batchObj = {};
    const batches = [];
    const res = [];

    for (let i = 0, l = objects.length, texture; i < l; i++) {
      texture = objects[i].texture;

      batchObj[texture.id] = batchObj[texture.id] || [];
      batchObj[texture.id].push(objects[i]);
    }
    
    const keys = Object.keys(batchObj);
    const len = keys.length;
    const maxTextureImageUnits = this.maxTextureImageUnits;

    for (let i = 0; i < len; i++) {
      batches.push(batchObj[keys[i]]);
    }

    for (let i = 0; i < len; i += maxTextureImageUnits) {
      res.push(batches.slice(i, Math.min(len, i + maxTextureImageUnits)));
    }

    return res;
  }

  prepareBatch(batch) {
    for (let i = 0, l = batch.length, texSlot, sprites; i < l; i++) {
      sprites = batch[i];
      texSlot = this.bind(sprites[0].texture);
      
      for (let j = 0, jLen = sprites.length; j < jLen; j++) {
        sprites[j].texSlot = texSlot;
      }
    }
  }
  
  bind(texture) {
    let index = this.boundTextures.indexOf(texture);
    
    if (index === -1) {
      index = this.pointer;
      this.pointer = (this.pointer + 1) % this.maxTextureImageUnits;

      const gl = this.gl;
      const glTexture = this.glTextures[index];

      gl.activeTexture(gl[`TEXTURE${index}`]);
      gl.bindTexture(gl.TEXTURE_2D, glTexture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl[texture.format], gl[texture.format], gl.UNSIGNED_BYTE, texture.image);

      this.boundTextures[index] = texture;
    }
    
    return index;
  }
}
