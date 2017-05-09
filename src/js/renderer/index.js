import Programs from '../programs';

const flatten = arr => arr.reduce((acc, val) => acc.concat(val.children.length ? flatten(val) : val), []);

export default class Renderer {
  constructor(el) {
    this.el = el;
    const gl = this.gl = el.getContext(`webgl`) || el.getContext(`experimental-webgl`);
    gl.viewport(0, 0, el.width, el.height);
    gl.clearColor(0, 0, 0, 1);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());

    this.programs = new Programs(this);
  }

  render(world) {
    const gl = this.gl;
    const objects = flatten(world.children);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const map = {};
    
    for (let i = 0, l = objects.length, object; i < l; i++) {
      object = objects[i];
      if (!object.texture) continue;
      
      map[object.program.name] = map[object.program.name] || [];
      map[object.program.name].push(object);
    }
    
    const keys = Object.keys(map);
    
    for (let i = 0, l = keys.length; i < l; i++) {
      this.programs.render(map[keys[i]]);
    }
  }
}
