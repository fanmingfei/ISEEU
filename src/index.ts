import createBackground from './gameObjects/background';
import createRactangle from './gameObjects/ractangle';
import createBubbles from './gameObjects/bubbles';
import resources from './resources';

import './option.json'

import { Game, resource } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { TextSystem } from '@eva/plugin-renderer-text';
import createPerson from './gameObjects/person';
// import { begin, next } from './manager';

resource.addResource(resources);

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: 750,
      height: 750 / window.innerWidth * window.innerHeight,
      antialias: true,
      resolution: devicePixelRatio / 2
    }),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
  ],
});

game.scene.transform.size.width = 750;
game.scene.transform.size.height = 1484;
function createOption(obj: any) {
  game.scene.addChild(createPerson());
  game.scene.addChild(createRactangle(obj.title));
  game.scene.addChild(createBubbles(obj.arr));
}
const obj = {
  title : '放学后校门口特别热闹，门口小商贩的周围，总是会聚集很多学生，你决定：',
  arr: ['回家看铠甲勇士','冲进小卖部']
}
createOption(obj)
game.scene.addChild(createBackground());
