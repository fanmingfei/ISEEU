import { Component, GameObject } from '@eva/eva.js';
import { SCENE_HEIGHT, SCENE_WIDTH, BG_HEIGHT } from '../const';
import { Img } from '@eva/plugin-renderer-img'
import { Render } from '@eva/plugin-renderer-render'
import { Transition } from '@eva/plugin-transition'

export default class Background extends Component {
  currentStep: string;
  current: GameObject;
  transition: Transition;

  init() {

    this.gameObject.transform.size.width = SCENE_WIDTH
    this.gameObject.transform.size.height = SCENE_HEIGHT
    this.gameObject.addComponent(new Render({
      sortableChildren: true
    }))
    this.transition = this.gameObject.addComponent(new Transition)

    this.transition.group = {
      move: [
        {
          name: 'position.y',
          component: this.gameObject.transform,
          values: [
            {
              time: 0,
              value: 0,
              tween: 'ease-out',
            },
            {
              time: 3000,
              value: BG_HEIGHT,
            }
          ]
        }
      ]
    }
    console.log(this.transition)
  }
  async changeStep(step: string) {
    if (!this.current) {
      const go = this.createGO({ step })
      this.gameObject.addChild(go)
      this.changeToCurrent(go)
      console.log('step1')
      return
    }
    const go = this.createGO({ next: true, step })
    this.gameObject.addChild(go)
    await this.slideTo()
    this.current.remove()
    this.changeToCurrent(go)
    this.reset()
  }
  createGO({ next, step }: { next?: boolean, step: string }) {
    const go = new GameObject('go', {
      size: {
        width: 750,
        height: BG_HEIGHT
      },
      anchor: { x: 0.5, y: 0.5 },
      origin: { x: 0.5, y: 0.5 }
    })
    go.addComponent(new Img({ resource: `step_${step}` }))
    if (next) {
      go.transform.position.y = -BG_HEIGHT
      go.addComponent(Render).zIndex = -1
    } else {
      go.addComponent(Render).zIndex = 1
    }
    return go
  }
  changeToCurrent(go: GameObject) {
    go.getComponent(Render).zIndex = 1
    go.transform.position.y = 0
    this.current = go
  }
  slideTo(): Promise<void> {
    return new Promise(r => {
      this.transition.play('move', 1)
      this.transition.once('finish', () => {
        r()
      })
    })
  }
  reset() {
    this.gameObject.transform.position.y = 0
  }
}
