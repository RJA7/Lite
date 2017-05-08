import vertexSource from './programManager/chuncks/standard.vert';
import fragmentSource from './programManager/chuncks/standard.frag';
import Program from './programManager/program';
import Tex from './programManager/tex';

export default class Renderer {
  constructor(el) {
    this.el = el;
    const gl = this.gl = el.getContext(`webgl`);
    gl.viewport(0, 0, el.width, el.height);
    gl.clearColor(0, 0, 0, 1);

    this.program = new Program(gl, vertexSource, fragmentSource);
    this.tex = new Tex(gl);
  }

  render(world) {
    const gl = this.gl;
    const tex = this.tex;
    const program = this.program;
    const buffer = program.buffer;
    const objects = world.children;

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    buffer.clear();

    for (let i = 0, l = objects.length, texSlot; i < l; i++) {
      texSlot = tex.bind(objects[i].texture);
      buffer.concat(objects[i], i, texSlot);
    }

    if (!buffer.vertices) return;

    program.use(this.el.width, this.el.height);
    gl.drawArrays(gl.TRIANGLES, 0, buffer.vertices);
  }
}
