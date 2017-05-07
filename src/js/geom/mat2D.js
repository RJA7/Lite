/*
* 0, 2, 4
* 1, 3, 5
* */

export default class Mat2D {
  constructor() {
    this.value = new Float32Array(6);
    this.identity();
  }

  identity() {
    const v = this.value;
    v[0] = v[3] = 1;
    v[1] = v[2] = v[4] = v[5] = 0;
  }
  
  setTranslation(x, y) {
    const v = this.value;
    v[4] = x;
    v[5] = y;
  }
}
