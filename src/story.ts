import { next } from './manager';

export default function createStory(list: any[]) {

  /** 当前对话框次序 */
  let currentDialogueIndex = 0;
  /** 对话框初始信息 */
  function initDialogue() {
    const currentInfo = list?.[currentDialogueIndex];
    return {
      text: currentInfo?.value,
      avatar: currentInfo?.avatar
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
      avatarGO.next({
        avatar: currentInfo?.avatar
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