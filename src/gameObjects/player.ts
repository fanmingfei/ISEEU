import { GameObject } from '@eva/eva.js';
import Player from '../components/player';
import { SCENE_HEIGHT, SCENE_WIDTH } from '../const';
export default function createPlayer() {
  const go = new GameObject('player')
  const player = go.addComponent(new Player)
  return {playerGo: go, player}
}
