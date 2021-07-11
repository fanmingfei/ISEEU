import { next } from './manager';

export default function createStory(list: any[]) {

  /** 当前对话框次序 */
  let currentDialogueIndex = 0;
  /** 对话框初始信息 */
  function initDialogue() {
    const currentText = list?.[currentDialogueIndex]?.value;
    return currentText;
  }
  /** 点击对话框 */
  function clickDialogue(dialogueGO: any, avatarGO: any) {
    const length = list.length;
    currentDialogueIndex++;
    if (currentDialogueIndex !== length) {
      const currentText = list?.[currentDialogueIndex]?.value;
      dialogueGO.next({
        text: currentText
      })
    } else {
      // 结束
      avatarGO.playMoveAnimate();
      dialogueGO.destroy();
      next()
    }
    return;
  }

  return { initDialogue, clickDialogue }
}