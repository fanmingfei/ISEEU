import config, { AllType, ConfigType, dialogue, Dialogue, Next, Question, Step, step } from './config';
import { findById } from './utils';

interface AnswerCache {
  [key: string]: string;
}
const answerCache: AnswerCache = {};
let current: AllType;


function getAnswer(id: string) {
  return answerCache[id]
}

export function begin(stepId: string) {
  current = findById(step, stepId) as AllType;
  loadStep()
}

const loadDialogue = () => {
  console.log('对话：', current.list.map(x => x.name + ': ' + x.value))
}
const loadQuestion = () => {
  console.log('问题： ', current.value)
  console.log('选项：', current.answers.map((v) => v.value))
}
const loadStep = () => {
  console.log('加载场景', current.id)
}
const loadNull = () => { }

const loadTable = {
  [ConfigType.dialogue]: loadDialogue,
  [ConfigType.question]: loadQuestion,
  [ConfigType.step]: loadStep,
  [ConfigType.empty]: loadNull
}

export function next(nexts?: Next[]) {
  if (!nexts) {
    nexts = current.next;
  }
  // table[current.next]()
  const allNexts = nexts.map((item) => {
    return findById(config[item.type], item.id)
  })
  const next = allNexts.find((item) => {
    if (!item.conditions || !item.conditions.length) {
      return true
    }
    // 是否命中条件
    return !!item.conditions.find((condition) => {
      // 触发条件所需要当答案是否包含玩家选择的答案
      return condition.answer.findIndex((x) => x === getAnswer(condition.id)) > -1
    })
  })
  current = next
  loadTable[next.type]()
}


/** 当选项被选择时 */
export function AnswerSelected(id: string) {
  if (current.type !== ConfigType.question) return
  const answer = findById(current.answers, id)
  if (answer) {
    next(answer.next)
  }
}
window.AnswerSelected = AnswerSelected