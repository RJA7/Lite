/*
* 0,  1,  2,  3,
* 4,  5,  6,  7,
* 8,  9,  10, 11,
* 12, 13, 14, 15
* */

export default class Mat4 {
  constructor() {
    this.value = new Float32Array(16);
    this.identity();
  }

  identity() {
    const v = this.value;
    v[0] = v[5] = v[10] = v[15] = 1;
    v[1] = v[2] = v[3] = v[4] = v[6] = v[7] = v[8] = v[9] = v[11] = v[12] = v[13] = v[14] = 0;
  }

  setCanvasProjection(w, h) {
    const v = this.value;
    
    v[0] = 2 / w;
    v[5] = -2 / h;
    v[12] = -1;
    v[13] = 1;

    return this;
  }
}
