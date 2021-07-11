import { GameObject } from '@eva/eva.js'
import { Event } from '@eva/plugin-renderer-event'
import { Img } from '@eva/plugin-renderer-img'
import { Text } from '@eva/plugin-renderer-text'
import event from '../event'


export default function createBubbles(textArr: Array<any>) {
  const box = new GameObject('box', {
    size: { width: 750, height: 1000 },
    position: {
      x: 0,
      y: 100
    },
  })
  const bubble1 = new GameObject('bubble1', {
    size: { width: 250, height: 250 },
    position: {
      x: -230,
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
  bubble1.addComponent(
    new Img({
      resource: 'bubble1',
    })
  );

  const text1 = new GameObject('text1', {
    size: { width: 470, height: 390 },
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
  text1.addComponent(
    new Text({
      text: textArr[0].value,
      style: {
        fontFamily: 'Arial',
        fontSize: 26,
        fontWeight: 'bold',
        fill: 'white',
        wordWrap: true,
        wordWrapWidth: 200,
        breakWords: true
      }
    })
  )
  bubble1.addChild(text1)


  const bubble2 = new GameObject('bubble1', {
    size: { width: 286, height: 286 },
    position: {
      x: 230,
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
  bubble2.addComponent(
    new Img({
      resource: 'bubble2',
    })
  );

  const text2 = new GameObject('text2', {
    size: { width: 470, height: 390 },
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

  text2.addComponent(
    new Text({
      text: textArr[1].value,
      style: {
        fontFamily: 'Arial',
        fontSize: 26,
        fontWeight: 'bold',
        fill: 'white',
        wordWrap: true,
        wordWrapWidth: 200,
        breakWords: true
      }
    })
  )
  const evt = bubble1.addComponent(new Event())
  evt.on('tap', () => {
    event.emit('answer', textArr[0].id)
  })
  const evt2 = bubble2.addComponent(new Event())
  evt2.on('tap', () => {
    event.emit('answer', textArr[1].id)
  })
  bubble2.addChild(text2)
  box.addChild(bubble1)
  box.addChild(bubble2)
  return box
}

