import Textures from '../textures';

export default class Programs {
  constructor(renderer) {
    this.renderer = renderer;
    this.textures = new Textures(renderer);
    this.programs = {};

    this.currentProgram = null;
  }

  render(objects) {
    const Program = objects[0].program;
    let program = this.programs[Program.name];

    if (!program) {
      program = this.programs[Program.name] = new Program(this.renderer);
      this.currentProgram = program;
    }

    if (this.currentProgram !== program) {
      program.use();
      this.currentProgram = program;
    }

    program.render(objects, this.textures);
  }
}
