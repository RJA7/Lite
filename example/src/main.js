import {Sprite, Group, Renderer, Texture} from '../../src/js/main';
import atlas from './atlas.json';
import atlas2 from './atlas2.json';


const renderer = new Renderer(document.getElementById('holder'));
const world = new Group();

(function update() {
  requestAnimationFrame(update);
  world.update();
  renderer.render(world);
}());

const image = new Image(); 

image.onload = () => {
  const texture = new Texture(image, atlas);
  const sprite = new Sprite(texture, `nerve.png`);
  sprite.setScale(0.2, 0.2);
  sprite.setPosition(200, 150);
  sprite.setPivot(sprite.width / 2, sprite.height / 2);

  world.add(sprite);
};

image.src = `assets/atlas.png`;


const image2 = new Image();

image2.onload = () => {
  const texture = new Texture(image2, atlas2);
  const sprite = new Sprite(texture, `dare.png`);
  sprite.setScale(0.2, 0.2);

  world.add(sprite);
};

image2.src = `assets/atlas2.png`;

