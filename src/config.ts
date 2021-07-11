// 问题有之前问题的条件
// 剧情也有之前问题的条件

export enum ConfigType {
  dialogue = 'dialogue',
  question = 'question',
  step = 'step',
  empty = 'empty'
}

export interface Next {
  type: ConfigType,
  id: string;
}

interface Condition {
  id: string;
  answer: string[]
}

export interface Question {
  type: ConfigType;
  /** 对话id */
  id: string;
  /** 问题内容 */
  value: string;
  /** 选项 */
  answers: Array<{
    /** 答案id */
    id: string;
    /** 答案内容 */
    value: string;
    /** 下一步行为 */
    next: Array<Next>;
  }>;
  conditions: Array<Condition>
}
export interface Dialogue {
  type: ConfigType;
  /** 对话id */
  id: string;
  /** 对话列表 */
  list: Array<{
    /** 头像 */
    avatar: string;
    /** 称呼 */
    name: string;
    /** 内容 */
    value: string;
  }>;
  /** 下一步行为 */
  next: Array<Next>;
  conditions: Array<Condition>
}
export interface Step {
  type: ConfigType;
  id: string;
  background: string;
  player: string;
  next: Array<Next>;
}
export interface Empty {
  type: ConfigType;
  id: string;
}

export type AllType = Question & Dialogue & Step & Empty;

export const dialogue: Dialogue[] = [{
  type: ConfigType.dialogue,
  id: 'START',
  list: [
    {
      avatar: 'avatar',
      name: '妈妈',
      value: '这是我们的孩子，给他起个名字吧！'
    },
    {
      avatar: 'avatar2',
      name: '爸爸',
      value: '就叫狗蛋吧！'
    },
  ],
  next: [{
    type: ConfigType.question,
    id: 'confirm_name'
  }],
  conditions: []
}, {
  type: ConfigType.dialogue,
  id: 'cry',
  list: [
    {
      avatar: '',
      name: '妈妈',
      value: '狗蛋怎么哭了'
    },
    {
      avatar: '',
      name: '爸爸',
      value: '可能是想喝狗奶了吧！'
    },
    {
      avatar: '',
      name: '妈妈',
      value: '去你的吧！'
    },
  ],
  next: [{
    type: ConfigType.step,
    id: 'adult'
  }],
  conditions: []
}, {
  type: ConfigType.dialogue,
  id: 'happy',
  list: [
    {
      avatar: '',
      name: '妈妈',
      value: '你看狗蛋笑的多开心'
    },
    {
      avatar: '',
      name: '爸爸',
      value: '可不是吗，名字那么好听'
    },
    {
      avatar: '',
      name: '妈妈',
      value: '嗯嗯嗯！'
    },
  ],
  next: [{
    type: ConfigType.step,
    id: 'adult'
  }],
  conditions: []
}]

export const question: Question[] = [{
  type: ConfigType.question,
  id: 'confirm_name',
  value: '确认自己叫狗蛋这个事实',
  answers: [
    {
      id: 'confirm_name_yes',
      value: '确认',
      next: [{
        type: ConfigType.dialogue,
        id: 'happy'
      }],
    },
    {
      id: 'confirm_name_no',
      value: '不要',
      next: [{
        type: ConfigType.dialogue,
        id: 'cry'
      }],
    }
  ],
  conditions: []
}]
export const step: Step[] = [
  {
    type: ConfigType.step,
    id: 'child',
    background: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
    player: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
    next: [{
      type: ConfigType.dialogue,
      id: 'START'
    }],
  },
  {
    type: ConfigType.step,
    id: 'youth',
    background: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
    player: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
    next: [{
      type: ConfigType.dialogue,
      id: '123'
    }],
  },
  {
    type: ConfigType.step,
    id: 'adult',
    background: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
    player: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
    next: [{
      type: ConfigType.empty,
      id: ''
    }]
  }
]
const empty: Empty[] = [{ type: ConfigType.empty, id: '' }]
const config: { [propName: string]: AllType[] } = {
  dialogue, question, step, empty
}
export default config