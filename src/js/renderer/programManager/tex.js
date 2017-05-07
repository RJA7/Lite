export default class Tex {
  constructor(gl) {
    this.gl = gl;
    this.slots = [null, null, null, null, null, null, null, null];
  }

  bind(texture) {
    const slots = this.slots;
    let index = slots.indexOf(texture);

    if (index === -1) {
      index = slots.indexOf(null);
      slots[index] = texture;
      
      const gl = this.gl;
      const tex = gl.createTexture();
      gl.activeTexture(gl[`TEXTURE${index}`]);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    }

    return index;
  }
}
