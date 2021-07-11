
import { Dialogue } from './config';
import { next } from './manager';

export default function createStory(dialogue: Dialogue) {
  const list = dialogue.list
  /** 当前对话框次序 */
  let currentDialogueIndex = 0;
  /** 对话框初始信息 */
  function initDialogue() {
    const currentInfo = list?.[currentDialogueIndex];
console.log(`dialogue_${dialogue?.id}_${currentDialogueIndex}`)
    return {
      text: currentInfo?.value,
      avatar: `dialogue_${dialogue?.id}_${currentDialogueIndex}`
    };
  }
  /** 点击对话框 */
  function clickDialogue(dialogueGO: any, avatarGO: any) {
    const length = list.length;
    currentDialogueIndex++;
    if (currentDialogueIndex !== length) {
      const currentInfo = list?.[currentDialogueIndex];
      dialogueGO.next({
        text: currentInfo?.value
      })
console.log(`dialogue_${dialogue?.id}_${currentDialogueIndex}`)
      avatarGO.next({
        avatar: `dialogue_${dialogue?.id}_${currentDialogueIndex}`
      })
    } else {
      // 结束
      avatarGO.playMoveAnimate();
      dialogueGO.destroy();
      setTimeout(() => next(), 3000)
    }
    return;
  }

  return { initDialogue, clickDialogue }
}