import { Avatar } from './gameObjects/avatar';
import { Dialogue } from './gameObjects/dialogue';
import createBtn from './gameObjects/btn';
import resources from './resources';

import { Game, GameObject, resource, } from '@eva/eva.js';
import { RendererSystem } from '@eva/plugin-renderer';
import { ImgSystem } from '@eva/plugin-renderer-img';
import { EventSystem } from '@eva/plugin-renderer-event';
// import { SpriteAnimationSystem } from '@eva/plugin-renderer-sprite-animation';
import { RenderSystem } from '@eva/plugin-renderer-render';
import { TransitionSystem } from '@eva/plugin-transition';
import { GraphicsSystem } from '@eva/plugin-renderer-graphics';
import { TextSystem } from '@eva/plugin-renderer-text';
import { SoundSystem, Sound } from '@eva/plugin-sound';
import { answerSelected, begin, next } from './manager';
import { SCENE_HEIGHT, SCENE_WIDTH } from './const';
import createBackground from './gameObjects/background';
import createPlayer from './gameObjects/player';
import event from './event';
import createStory from './story';
import createPerson from './gameObjects/person';
import createRactangle from './gameObjects/ractangle';
import createBubbles from './gameObjects/bubbles';
import { Question } from './config';
window.event = event

resource.addResource(resources);
window.resources = resources

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
    // new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
    new SoundSystem({ autoPauseAndStart: true, onError() { } })
  ],
});

game.scene.transform.size.width = SCENE_WIDTH;
game.scene.transform.size.height = SCENE_HEIGHT;

const sound = game.scene.addComponent(new Sound({
  resource: 'bgSound'
}))
// document.body.addEventListener('touchstart', () => {
//   sound.play()
// })


const { backContainer, background } = createBackground()
game.scene.addChild(backContainer)
// background.changeStep('bg')
window.background = background

const { playerGo, player } = createPlayer()

game.scene.addChild(playerGo)
window.player = player

event.on('changeStep', (step) => {
  background.changeStep(step)
  player.changePlayer(step)
  setTimeout(() => {
    next()
  }, 3000)
})

begin('child')


event.on('dialogue', (dialogue) => {
  const { initDialogue, clickDialogue } = createStory(dialogue, sound)
  const dialogueInfo = initDialogue();
  // Dialogue
  const dialogueGO = new Dialogue();
  const dialogueEl = dialogueGO.init({
    text: dialogueInfo.text,
    onTap: () => {
      clickDialogue(dialogueGO, avatarGO);
    }
  })
  game.scene.addChild(dialogueEl);

  // Avatar
  const avatarGO = new Avatar();
  const avatarEl = avatarGO.init({
    avatar: dialogueInfo.avatar
  })
  game.scene.addChild(avatarEl);
})
let rect: GameObject, select: GameObject
event.on('question', (obj: Question) => {
  rect = createRactangle(obj.value)
  game.scene.addChild(rect);
  select = createBubbles(obj.answers)
  game.scene.addChild(select);
})

event.on('answer', (id) => {
  answerSelected(id)
  rect.remove()
  select.remove()
})




// setTimeout(() => {
//   sound.pause()
//   sound.config.seek = 4
//   sound.config.duration = 3
// }, 5000)


