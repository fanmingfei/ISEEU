import { GameObject } from '@eva/eva.js';
import { Event } from '@eva/plugin-renderer-event';
import { Img } from '@eva/plugin-renderer-img';
import { Text } from '@eva/plugin-renderer-text';
import { Transition } from '@eva/plugin-transition';

interface initParams {
  text: string;
  onTap: Function;
}

interface nextParams {
  text: string;
}

class Dialogue {
  box: any;
  textEl: any;
  textComponents: any;
  init({ text, onTap }: initParams) {
    const box = this.box = new GameObject('box', {
      size: {
        width: 750,
        height: 300,
      },
      position: {
        x: 0,
        y: 700,
      },
    });
  
    box.addComponent(
      new Img({
        resource: 'dialogue',
      })
    );
  
    const evt = box.addComponent(new Event)
    evt.on('tap', () => {
      onTap();
    })
  
  
    const textEl = this.textEl = new GameObject('text', {
      position: {
        x: 25,
        y: 25,
      },
    });
    this.textComponents = textEl.addComponent(
      new Text({
        text: text,
        style: {
          fontSize: 32,
          fill: 0xffffff,
          wordWrap: true,
          wordWrapWidth: 700,
          breakWords: true
        },
      })
    );
    box.addChild(textEl);
    
    return box;
  }
  next({ text } : nextParams ) {
    this.textComponents.text = text;
  }
  destroy() {
    // const transition = this.box.addComponent(new Transition({
    //   group: {
    //     idle: [
    //       {
    //         name: 'scale.x',
    //         component: this.box.transform,
    //         values: [
    //           {
    //             time: 0,
    //             value: 1,
    //             tween: 'ease-out',
    //           },
    //           {
    //             time: 300,
    //             value: 0,
    //           },
    //         ],
    //       },
    //       {
    //         name: 'scale.y',
    //         component: this.box.transform,
    //         values: [
    //           {
    //             time: 0,
    //             value: 1,
    //             tween: 'ease-out',
    //           },
    //           {
    //             time: 300,
    //             value: 0,
    //           },
    //         ],
    //       },
    //     ]
    //   }
    // }))
  
    // transition.play('idle', 1)

    // await(300);
    this.box.destroy();
  }
}
export { Dialogue };
