import { Component, GameObject } from '@eva/eva.js';
import { SCENE_HEIGHT, SCENE_WIDTH, BG_HEIGHT } from '../const';
import { Img } from '@eva/plugin-renderer-img'
import { Render } from '@eva/plugin-renderer-render'
import { Transition } from '@eva/plugin-transition'

export default class Player extends Component {
  currentStep: string;
  current: GameObject;
  player1: GameObject;
  player2: GameObject;

  init() {
    this.gameObject.transform.size.width = SCENE_WIDTH
    this.gameObject.transform.size.height = SCENE_HEIGHT
    this.gameObject.addComponent(new Render({
    }))
    this.player1 = this.createGO()
    this.player2 = this.createGO()
    this.gameObject.addChild(this.player1)
    this.gameObject.addChild(this.player2)
  }
  async changePlayer(player: string) {
    if (!this.current) {
      this.player1.getComponent(Img).resource = `player_${player}`
      this.show(this.player1)
      this.current = this.player1
      return
    }
    const needShowGo = this.current === this.player1 ? this.player2 : this.player1
    const needHideGo = this.current === this.player1 ? this.player1 : this.player2
    this.current = needShowGo
    needShowGo.getComponent(Img).resource = `player_${player}`
    this.show(needShowGo)
    this.hide(needHideGo)
  }
  createGO() {
    const go = new GameObject('go', {
      position: {
        x: 0,
        y: 0
      },
      size: {
        width: 750,
        height: 750,
      },
      anchor: {
        y: 1,
        x: 0.5
      },
      origin: {
        y: 1,
        x: 0.5
      }
    })
    go.addComponent(new Img({ resource: `basketball` }))
    const render = go.addComponent(new Render({ alpha: 0 }))
    const transition = go.addComponent(new Transition())
    transition.group = {
      show: [
        {
          name: 'alpha',
          component: render,
          values: [{
            time: 0,
            value: 0,
            tween: 'ease-out',
          }, {
            time: 3000,
            value: 1
          }]
        }
      ],
      hide: [
        {
          name: 'alpha',
          component: render,
          values: [{
            time: 0,
            value: 1,
            tween: 'ease-out',
          }, {
            time: 3000,
            value: 0
          }]
        }
      ]
    }

    return go
  }
  show(go: GameObject) {
    const trans = go.getComponent(Transition)
    trans.play('show', 1)
  }
  hide(go: GameObject) {
    const trans = go.getComponent(Transition)
    trans.play('hide', 1)
  }

}
