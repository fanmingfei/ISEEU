import { RESOURCE_TYPE } from '@eva/eva.js';
import { dialogue, step } from './config';
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
dialogue.forEach((item) => {
  item.list.forEach((item1, i) => {
    resources.push({
      name: `dialogue_${item.id}_${i}`,
      type: RESOURCE_TYPE.IMAGE,
      src: {
        image: {
          type: 'png',
          url: item1.avatar
        },
      },
      preload: true,
    })
  })
})

export default resources