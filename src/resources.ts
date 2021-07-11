import { RESOURCE_TYPE } from '@eva/eva.js';
import { step } from './config';
const resources = [
  {
    name: 'dialogue',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          './statics/dialogue.png',
      },
    },
    preload: true,
  },
  {
    name: 'avatar',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          './statics/avatar.png',
      },
    },
    preload: true,
  },
  {
    name: 'avatar2',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          './statics/avatar2.png',
      },
    },
    preload: true,
  }
] as any;
step.forEach((item) => {
  resources.push({
    name: `player_${item.id}`,
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: item.player
      },
    },
    preload: true,
  })
  resources.push({
    name: `step_${item.id}`,
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url: item.background
      },
    },
    preload: true,
  })

})

export default resources