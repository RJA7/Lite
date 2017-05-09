import Textures from '../textures';

export default class Programs {
  constructor(renderer) {
    this.renderer = renderer;
    this.textures = new Textures(renderer);
    this.programs = [];
    this.instances = [];
    
    this.currentProgram = null;
  }
  
  render(objects) {
    const Program = objects[0].program;
    let index = this.programs.indexOf(Program);
    let program;
    
    if (index === -1) {
      program = new Program(this.renderer);
      this.instances.push(program);
      this.programs.push(Program);
      this.currentProgram = program;
    } else {
      program = this.instances[index];

      if (this.currentProgram !== program) {
        program.use();
        this.currentProgram = program;
      }
    }

    program.render(objects, this.textures);
  }
}
