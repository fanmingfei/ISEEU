// 问题有之前问题的条件
// 剧情也有之前问题的条件

export enum ConfigType {
  /** 旁白 */
  dialogue = 'dialogue',
  /** 对话 */
  question = 'question',
  /** 步骤 */
  step = 'step',
  /** 不展示 */
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
  id: 'school_choice_a',
  list: [
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '你背着书包冲进家门，高喊一声“我回来啦”，爸爸妈妈正在厨房做饭'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '你将书包甩到书桌上，打开电视准备看海绵宝宝'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '还没看一会儿，妈妈就开吼：作业写完了么？就看电视！'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '你悻悻地关上电视，回房写作业去了，但还是有些委屈。'
    },
  ],
  next: [{
    type: ConfigType.step,
    id: 'youth'
  }],
  conditions: []
}, {
  type: ConfigType.dialogue,
  id: 'school_choice_b',
  list: [
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '店里新上海绵宝宝的玩具，让你很是眼馋，就是价格让你望而却步'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '看着口袋里只有攒下的4块钱，叹了口气'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '你有些不舍的离开了小店，临走前还看了一眼海绵宝宝'
    },
  ],
  next: [{
    type: ConfigType.step,
    id: 'youth'
  }],
  conditions: []
}, {
  type: ConfigType.dialogue,
  id: 'youth_choice_a',
  list: [
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '队友坑到不行，你觉得有点带不动'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '我方水晶被打爆的瞬间，有点不爽，对着死党说：再来'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '不知不觉已经凌晨1点了，自己晚上什么书都没有看，暗暗发誓明天一定要认真复习'
    },
  ],
  next: [{
    type: ConfigType.step,
    id: 'adult'
  }],
  conditions: []
}, {
  type: ConfigType.dialogue,
  id: 'youth_choice_b',
  list: [
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '你翻开了五年高考三年模拟，准备开始做题'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '然而，10分钟后，却开始打哈欠犯困了'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '上下眼皮打架，最终还是趴在桌上睡着了'
    },
  ],
  next: [{
    type: ConfigType.step,
    id: 'adult'
  }],
  conditions: []
}, {
  type: ConfigType.dialogue,
  id: 'adult_choice_a',
  list: [
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '你充分发挥出中华小曲库的能力，成为了场上的焦点，不知不觉很晚了，明天还要上班，大家各自回家了。'
    }
  ],
  next: [{
    type: ConfigType.step,
    id: 'end'
  }],
  conditions: []
}, {
  type: ConfigType.dialogue,
  id: 'adult_choice_b',
  list: [
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '跟同事比摇骰子，也不知道今天怎么了，一次也没赢过'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '输的酒到是喝了不少，有点发晕，你靠在了沙发上睡了起来'
    },
    {
      avatar: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
      name: '',
      value: '醒来的时候已经是早上了，头发晕，却还要去上班。'
    },
  ],
  next: [{
    type: ConfigType.step,
    id: 'end'
  }],
  conditions: []
}]

export const question: Question[] = [{
  type: ConfigType.question,
  id: 'confirm_school_choice',
  value: '放学后校门口特别热闹，门口小商贩的周围，总是会聚集很多学生，你决定：',
  answers: [
    {
      id: 'confirm_school_choice_a',
      value: '回家看铠甲勇士',
      next: [{
        type: ConfigType.dialogue,
        id: 'school_choice_a'
      }],
    },
    {
      id: 'confirm_school_choice_b',
      value: '冲进小卖部',
      next: [{
        type: ConfigType.dialogue,
        id: 'school_choice_b'
      }],
    }
  ],
  conditions: []
}, {
  type: ConfigType.question,
  id: 'confirm_youth_choice',
  value: '放学后校门口特别热闹，门口小商贩的周围，总是会聚集很多学生，你决定：',
  answers: [
    {
      id: 'confirm_youth_choice_a',
      value: '来上一局',
      next: [{
        type: ConfigType.dialogue,
        id: 'youth_choice_a'
      }],
    },
    {
      id: 'confirm_youth_choice_b',
      value: '好好复习',
      next: [{
        type: ConfigType.dialogue,
        id: 'youth_choice_b'
      }],
    }
  ],
  conditions: []
}, {
  type: ConfigType.question,
  id: 'confirm_adult_choice',
  value: '今天部门团建，大家一起去KTV唱歌，你决定：',
  answers: [
    {
      id: 'confirm_adult_choice_a',
      value: '麦霸本色出演',
      next: [{
        type: ConfigType.dialogue,
        id: 'adult_choice_a'
      }],
    },
    {
      id: 'confirm_adult_choice_b',
      value: '摇骰子喝啤酒',
      next: [{
        type: ConfigType.dialogue,
        id: 'adult_choice_b'
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
      type: ConfigType.question,
      id: 'confirm_school_choice'
    }]
  },
  {
    type: ConfigType.step,
    id: 'youth',
    background: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
    player: 'https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp',
    next: [{
      type: ConfigType.question,
      id: 'confirm_youth_choice'
    }],
  },
  {
    type: ConfigType.step,
    id: 'adult',
    background: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
    player: './statics/TB15Upxqk9l0K4jSZFKXXXFjpXa-750-1624.jpg',
    next: [{
      type: ConfigType.question,
      id: 'confirm_adult_choice'
    }]
  },
  {
    type: ConfigType.step,
    id: 'end',
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


