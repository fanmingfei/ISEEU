import { GameObject } from '@eva/eva.js';
import Background from '../components/background';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../const';
export default function createBackground() {

  const backContainer = new GameObject('backContainer', {
    size: {
      width: SCENE_WIDTH,
      height: SCENE_HEIGHT
    }
  })
  const component = backContainer.addComponent(new Background())
  return {backContainer, background: component}
}
