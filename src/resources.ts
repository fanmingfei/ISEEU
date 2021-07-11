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
        'https://img.alicdn.com/imgextra/i2/O1CN014Meb4o26GQG2evk6C_!!6000000007634-2-tps-668-577.png',
          // './statics/dialogue.png',
      },
    },
    preload: true,
  },
  {
    name: 'bubble1',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          './statics/a.png',
      },
    },
    preload: true,
  },
  {
    name: 'bubble2',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          './statics/b.png',
      },
    },
    preload: true,
  },
  {
    name: 'bubble3',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          'https://img.alicdn.com/imgextra/i3/O1CN01UMZwKc1cIJQ4Rhjge_!!6000000003577-2-tps-177-145.png',
      },
    },
    preload: true,
  },
  {
    name: 'bubble4',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          'https://img.alicdn.com/imgextra/i3/O1CN01qpda0e1L3L05lQ8Bg_!!6000000001243-2-tps-177-145.png',
      },
    },
    preload: true,
  },
  {
    name: 'rectangle',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          'https://img.alicdn.com/imgextra/i2/O1CN014Meb4o26GQG2evk6C_!!6000000007634-2-tps-668-577.png',
      },
    },
    preload: true,
  },
  {
    name: 'person',
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: 'png',
        url:
          'https://img.alicdn.com/imgextra/i2/O1CN01o5vprb29v8JHTLlhU_!!6000000008129-2-tps-333-965.png',
      },
    },
    preload: true,
  },
  {
    name: 'bgSound',
    type: RESOURCE_TYPE.AUDIO,
    src: {
      audio: {
        type: 'audio',
        url: './statics/example.mp3',
      },
    },
    preload: true,
  },
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