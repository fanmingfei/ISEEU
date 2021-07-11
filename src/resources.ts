import { RESOURCE_TYPE } from '@eva/eva.js';
import { step } from './config';
const resources = [] as any;
step.forEach((item)=>{
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
