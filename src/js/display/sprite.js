import Group from './group';
import TextureProgram from '../programs/textureProgram';

export default class Sprite extends Group {
  constructor(texture, frameName) {
    super();

    this.texture = texture;
    this.frameName = frameName;
    
    this.program = TextureProgram;

    const frame = this.frame = texture.atlas.frames.filter(f => f.filename === frameName)[0].frame; // todo awesome
    const texW = texture.image.width;
    const texH = texture.image.height;

    this.texCoord = {
      left  : frame.x / texW,
      right : (frame.x + frame.w) / texW,
      top   : frame.y / texH,
      bottom: (frame.y + frame.h) / texH
    };

    this.x = 0;
    this.y = 0;
    this.width = frame.w;
    this.height = frame.h;
    this.pivotX = 0;
    this.pivotY = 0;
    this.localVertices = {};

    this.refreshVertices();
  }

  refreshVertices() {
    const localVertices = this.localVertices;

    localVertices.left = -this.pivotX;
    localVertices.right = this.width - this.pivotX;
    localVertices.top = -this.pivotY;
    localVertices.bottom = this.height - this.pivotY;
  }

  setScale(scaleX, scaleY) {
    this.width = this.frame.w * scaleX;
    this.height = this.frame.h * scaleY;

    this.refreshVertices(); // todo refresh on update
  }

  setPivot(pivotX, pivotY) {
    this.pivotX = pivotX;
    this.pivotY = pivotY;

    this.refreshVertices();
  }
}