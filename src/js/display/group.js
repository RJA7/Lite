import Mat2D from '../geom/mat2D';

export default class Group {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.worldZ = 0;
    this.width = 0;
    this.height = 0;
    
    this.children = [];
    this.transform = new Mat2D();
  }
  
  add(child) {
    child.worldZ = this.children.indexOf(child) === -1 ? this.children.push(child) + this.worldZ : child.worldZ;
    // update child children worldZ;
  }
  
  setPosition(x, y) {
    this.x = x;
    this.y = y;
    
    this.refreshTransform();
  }
  
  refreshTransform() {
    const transform = this.transform;
    transform.identity();
    transform.setTranslation(this.x, this.y);
  }
  
  update() {
    const children = this.children;
    
    for (let i = 0, l = children.length; i < l; i++) {
      children[i].update();
    }
  }
}
