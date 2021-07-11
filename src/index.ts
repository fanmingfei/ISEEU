import { Avatar } from './gameObjects/avatar';
import { Dialogue } from './gameObjects/dialogue';
import createBtn from './gameObjects/btn';
import resources from './resources';

import { Game, resource, } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { TextSystem } from '@eva/plugin-renderer-text';
import { begin, next, initDialogue, clickDialogue } from './manager';
import { SCENE_HEIGHT, SCENE_WIDTH } from './const';
import createBackground from './gameObjects/background';
import createPlayer from './gameObjects/player';
import event from './event';
window.event = event

resource.addResource(resources);

const game = new Game({
  systems: [
    new RendererSystem({
      canvas: document.querySelector('#canvas'),
      width: SCENE_WIDTH,
      height: SCENE_HEIGHT,
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

game.scene.transform.size.width = SCENE_WIDTH;
game.scene.transform.size.height = SCENE_HEIGHT;

const {backContainer,background} = createBackground()
game.scene.addChild(backContainer)
// background.changeStep('bg')
window.background = background

const {playerGo, player} = createPlayer()

game.scene.addChild(playerGo)
window.player = player

event.on('changeStep', (step) => {
  background.changeStep(step)
  player.changePlayer(step)
})


const btn = createBtn({
  text: '下一步',
  callback() {
    next()
  }
})
game.scene.addChild(btn)

setTimeout(() => {
  begin('child')
}, 3000)

const dialogueInfo = initDialogue();
// Avatar
const avatarGO = new Avatar();
const avatarEl = avatarGO.init({
  avatar: dialogueInfo.avatar
})
game.scene.addChild(avatarEl);

// Dialogue
const dialogueGO = new Dialogue();
const dialogueEl = dialogueGO.init({
  text: dialogueInfo.text,
  onTap: () => {
    clickDialogue(dialogueGO, avatarGO);
  }
})
game.scene.addChild(dialogueEl);

