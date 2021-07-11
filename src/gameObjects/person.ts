import { GameObject } from '@eva/eva.js';
import { Img } from '@eva/plugin-renderer-img'

export default function createPerson() {
  const person = new GameObject('person', {
    size: { width: 289, height: 1108 },
    origin: { x: 0.5, y: 1 },
    position: {
      x: -40,
      y: 80,
    },
    anchor: {
      x: 0.5,
      y: 1,
    },
  });

  person.addComponent(
    new Img({
      resource: 'person',
    })
  );
  return person;
}
