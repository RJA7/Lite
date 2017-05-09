let id = 0;

export default class Program {
  constructor(gl, vertexShaderSource, fragmentShaderSource) {
    this.id = id++;
    this.gl = gl;

    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    const program = this.program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    this.use();
  }

  use() {
    this.gl.useProgram(this.program);
  }

  render(objects, textures) {
    return null;
  }
}