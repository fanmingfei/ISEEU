import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img'
import { Text } from '@eva/plugin-renderer-text'

export default function createRactangle(txt: string) {
  const ractangle = new GameObject('ractangle', {
    size: { width: 750, height: 390 },
    origin: { x: 0.5, y: 1 },
    position: {
      x: 0,
      y: -1000,
    },
    anchor: {
      x: 0.5,
      y: 1,
    },
  });

  ractangle.addComponent(
    new Img({
      resource: 'rectangle',
    })
  );
  const text = new GameObject('text', {
    // size: { width: 520, height: 390 },
    position: {
      x: 0,
      y: 0
    },
    origin: {
      x: 0.5,
      y: 0.5
    },
    anchor: {
      x: 0.5,
      y: 0.5
    }
  })

  text.addComponent(
    new Text({
      text: txt,
      style: {
        fontFamily: 'SentyTang',
        fontSize: 44,
        fontWeight: 'bold',
        fill: 0x333333,
        wordWrap: true,
        wordWrapWidth: 550,
        breakWords: true
      }
    })
  )
  ractangle.addChild(text)
  return ractangle;
}
