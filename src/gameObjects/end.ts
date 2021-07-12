import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img';
export default function createEnd () {
  const img = new GameObject('', {
    size: {
      width: 750,
      height: 1472
    },
  })
  img.addComponent(new Img({resource: 'end'}))
  return img
}