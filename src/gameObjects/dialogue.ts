import { GameObject } from '@eva/eva.js';
import { Event } from '@eva/plugin-renderer-event';
import { Img } from '@eva/plugin-renderer-img';
import { Text } from '@eva/plugin-renderer-text';
import { Render } from '@eva/plugin-renderer-render';
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
  textComponent: any;
  renderComponent: object;
  init({ text, onTap }: initParams) {
    const box = this.box = new GameObject('box', {
      size: {
        width: 750,
        height: 300,
      },
      position: {
        x: 0,
        y: 900,
      },
    });
  
    box.addComponent(
      new Img({
        resource: 'dialogue',
      })
    );

    this.renderComponent = box.addComponent(
      new Render({
        alpha: 1,
      }),
    );
  
    const evt = box.addComponent(new Event)
    evt.on('tap', () => {
      onTap();
    })
  
  
    const textEl = this.textEl = new GameObject('text', {
      position: {
        x: 120,
        y: 125,
      },
    });
    this.textComponent = textEl.addComponent(
      new Text({
        text: text,
        style: {
          fontSize: 32,
          fill: 0xffffff,
          wordWrap: true,
          wordWrapWidth: 580,
          breakWords: true
        },
      })
    );
    box.addChild(textEl);
    
    return box;
  }
  next({ text } : nextParams ) {
    this.textComponent.text = text;
  }
  async destroy() {
    // const transition = new Transition({
    //   group: {
    //     idle: [
    //       {
    //         name: 'alpha',
    //         component: this.renderComponent,
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
    //       }
    //     ]
    //   }
    // })
    // const animation = this.box.addComponent(transition)
  
    // animation.play('idle', 1)
    // animation.on('finish', () => {
    //   this.box.removeComponent(transition);
      this.box.destroy();
    // })
  }
}
export { Dialogue };
