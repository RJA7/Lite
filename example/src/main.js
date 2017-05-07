import {Sprite, Group, Renderer, Texture} from '../../src/js/main';
import atlas from './atlas.json';
import atlas2 from './atlas2.json';

const image = new Image();
const image2 = new Image();

image.onload = function () {
  image2.onload = function () {
    const texture = new Texture(image, atlas);
    const renderer = new Renderer(document.getElementById('holder'));
    const world = new Group();
    const sprite = new Sprite(texture, `verik.jpg`);
    sprite.setScale(0.2, 0.2);
    sprite.setPosition(200, 150);
    sprite.setPivot(sprite.width / 2, sprite.height / 2);


    const texture2 = new Texture(image2, atlas2);
    const sprite2 = new Sprite(texture2, `dare.png`);
    sprite2.setScale(0.2, 0.2);

    world.add(sprite);
    world.add(sprite2);

    (function update() {
      requestAnimationFrame(update);
      world.update();
      renderer.render(world);
    }());
  };
};

image.src = `assets/atlas.png`;
image2.src = `assets/atlas2.png`;
