import { GameObject } from '@eva/eva.js';
import { Event } from '@eva/plugin-renderer-event';
import { Img } from '@eva/plugin-renderer-img';
import { Text } from '@eva/plugin-renderer-text';
import { Transition } from '@eva/plugin-transition';
import { Render } from '@eva/plugin-renderer-render';

interface initParams {
  avatar: string;
}

interface nextParams {
  avatar: string;
}
const w = 150;
const h = 100;
const x = -300;
const y = -520;

class Avatar {
  box: any;
  avatarComponent: any;
  renderComponent: any;
  init({ avatar }: initParams) {
    
    const box = this.box = new GameObject('box', {
      size: {
        width: w,
        height: h,
      },
      position: {
        x: x,
        y: y,
      },
      anchor: {
        y: 1,
        x: 0.5
      },
      origin: {
        y: 1,
        x: 0.5
      }
    });

    this.renderComponent = box.addComponent(
      new Render({
        alpha: 1,
      }),
    );
  
    this.avatarComponent = box.addComponent(
      new Img({
        resource: avatar,
      })
    );
  
    return box;
  }
  next({ avatar } : nextParams ) {
    this.avatarComponent.resource = avatar;
  }
  playMoveAnimate() {
    const transition = this.box.addComponent(new Transition({
      group: {
        idle: [
          {
            name: 'position.x',
            component: this.box.transform,
            values: [
              {
                time: 0,
                value: x,
                tween: 'ease-out',
              },
              {
                time: 1500,
                value: 0,
                tween: 'ease-out',
              },
              {
                time: 2000,
                value: 0,
                tween: 'ease-in',
              },
              {
                time: 3000,
                value: 175,
              },
            ],
          },
          {
            name: 'position.y',
            component: this.box.transform,
            values: [
              {
                time: 0,
                value: y,
                tween: 'ease-out',
              },
              {
                time: 1500,
                value: y - 400,
                tween: 'ease-out',
              },
              {
                time: 2000,
                value: y - 400,
                tween: 'ease-in',
              },
              {
                time: 3000,
                value: - 130,
              },
            ],
          },
          {
            name: 'scale.x',
            component: this.box.transform,
            values: [
              {
                time: 0,
                value: 1,
                tween: 'ease-out',
              },
              {
                time: 1500,
                value: 2.5,
                tween: 'ease-out',
              },
              {
                time: 2000,
                value: 2.5,
                tween: 'ease-in',
              },
              {
                time: 3000,
                value: 0,
              },
            ],
          },
          {
            name: 'scale.y',
            component: this.box.transform,
            values: [
              {
                time: 0,
                value: 1,
                tween: 'ease-out',
              },
              {
                time: 1500,
                value: 2.5,
                tween: 'ease-out',
              },
              {
                time: 2000,
                value: 2.5,
                tween: 'ease-in',
              },
              {
                time: 3000,
                value: 0,
              },
            ],
          },
          {
            name: 'alpha',
            component: this.renderComponent,
            values: [
              {
                time: 0,
                value: 1,
                tween: 'ease-out',
              },
              {
                time: 2000,
                value: 1,
                tween: 'ease-in',
              },
              {
                time: 3000,
                value: 0,
              },
            ],
          },
        ]
      }
    }))
  
    transition.play('idle', 1)
  }
  destroy() {
    this.box.destroy();
  }
}
export { Avatar };
