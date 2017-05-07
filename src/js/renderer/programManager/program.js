import Mat4 from '../../geom/mat4';
import Buffer from './buffer';

export default class Program {
  constructor(gl, vertexSource, fragmentSource) {
    this.gl = gl;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(vertexShader, vertexSource);
    gl.shaderSource(fragmentShader, fragmentSource);
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    const program = this.native = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    this.buffer = new Buffer();
    this.__ready = false;
  }
  
  use(width, height) {
    if (!this.__ready) {
      this.gl.useProgram(this.native);
      this.prepare();
      this.setProjectionMatrix(width, height);
      this.__ready = true;
    }
  }

  prepare() {
    const gl = this.gl;
    const program = this.native;

    const buffer = gl.createBuffer(); // maybe it doesn't need to create it every time
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer); // don't bind if bound?
    gl.bufferData(gl.ARRAY_BUFFER, this.buffer, gl.STATIC_DRAW); // maybe dynamic and sub data is quicker

    const SIZE = 4;

    // local vertex position 2
    const aPositionLocation = gl.getAttribLocation(program, `aPosition`);
    gl.vertexAttribPointer(aPositionLocation, 2, gl.FLOAT, false, SIZE * 12, 0);
    gl.enableVertexAttribArray(aPositionLocation);

    // tex coord 2
    const aTexCoordLocation = gl.getAttribLocation(program, `aTexCoord`);
    gl.vertexAttribPointer(aTexCoordLocation, 2, gl.FLOAT, false, SIZE * 12, SIZE * 2);
    gl.enableVertexAttribArray(aTexCoordLocation);

    // sampler 1
    const aTexSlot = gl.getAttribLocation(program, `aTexSlot`);
    gl.vertexAttribPointer(aTexSlot, 1, gl.FLOAT, false, SIZE * 12, SIZE * 4);
    gl.enableVertexAttribArray(aTexSlot);

    // model world transform 4
    let aModelTransform = gl.getAttribLocation(program, `aModelTransform`);
    gl.vertexAttribPointer(aModelTransform, 4, gl.FLOAT, false, SIZE * 12, SIZE * 5);
    gl.enableVertexAttribArray(aModelTransform);

    // model world pos xyz 3
    const aModelPosition = gl.getAttribLocation(program, `aModelPosition`);
    gl.vertexAttribPointer(aModelPosition, 3, gl.FLOAT, false, SIZE * 12, SIZE * 9);
    gl.enableVertexAttribArray(aModelPosition);

    const uSamplers = gl.getUniformLocation(program, `uSamplers`);
    gl.uniform1iv(uSamplers, new Int32Array([0, 1]));
  }
  
  setProjectionMatrix(width, height) {
    const gl = this.gl;
    const location = gl.getUniformLocation(this.native, `uProjectionMatrix`);
    gl.uniformMatrix4fv(location, false, new Mat4().setCanvasProjection(width, height).value);
  }
}
