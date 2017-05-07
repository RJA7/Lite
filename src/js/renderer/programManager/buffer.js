const EDGES = [
  `left`, `top`,
  `right`, `bottom`,
  `left`, `bottom`,

  `left`, `top`,
  `right`, `bottom`,
  `right`, `top`
];

export default class Buffer extends Float32Array {
  constructor() {
    super(512);
    this.size = 0;
    this.vertices = 0;
  }
  
  concat(object, z, s) {
    const t = this;
    const texCoord = object.texCoord;
    const vertices = object.localVertices;
    const transform = object.transform.value;
    let size = this.size;

    // local vertex position 2
    // texCoord 2
    // sampler 1
    // model world transform 4
    // model world position 3 xyz
    for (let i = 0, xEdge, yEdge; i < 12; i += 2) {
      xEdge = EDGES[i];
      yEdge = EDGES[i + 1];
      
      t[size++] = vertices[xEdge];
      t[size++] = vertices[yEdge];
      t[size++] = texCoord[xEdge];
      t[size++] = texCoord[yEdge];
      t[size++] = s;

      for (let j = 0, l = transform.length; j < l; j++) {
        t[size++] = transform[j];
      }

      t[size++] = z;
    }
    
    this.size = size;
    this.vertices += 6;
  }
  
  clear() {
    this.size = 0;
    this.vertices = 0;
  }
}
