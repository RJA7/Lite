let ID = 0;

export default class Texture {
  constructor(image, atlas) {
    this.id = ID++;
    this.format = `RGBA`;
    
    this.image = image;
    this.atlas = atlas;
  }  
}
