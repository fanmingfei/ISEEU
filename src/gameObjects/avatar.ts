import { GameObject } from '@eva/eva.js';
import { Event } from '@eva/plugin-renderer-event';
import { Img } from '@eva/plugin-renderer-img';
import { Text } from '@eva/plugin-renderer-text';
import { Transition } from '@eva/plugin-transition';

interface initParams {
}

interface nextParams {
  text: string;
}

class Avatar {
  box: any;
  textEl: any;
  textComponents: any;
  init({}: initParams) {
    const box = this.box = new GameObject('box', {
      size: {
        width: 100,
        height: 100,
      },
      position: {
        x: 0,
        y: 600,
      },
    });
  
    box.addComponent(
      new Img({
        resource: 'avatar',
      })
    );
  
    return box;
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
                value: 0,
                tween: 'ease-out',
              },
              {
                time: 1000,
                value: 375,
              },
            ],
          },
          {
            name: 'position.y',
            component: this.box.transform,
            values: [
              {
                time: 0,
                value: 600,
                tween: 'ease-out',
              },
              {
                time: 1000,
                value: 400,
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
                time: 1000,
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
                time: 1000,
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
