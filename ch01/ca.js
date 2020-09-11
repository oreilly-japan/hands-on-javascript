class CA1Rule90 {
  constructor(initialStates) {
    this.rule = {
      "000": "0",
      "001": "1",
      "010": "0",
      "011": "1",
      "100": "1",
      "101": "0",
      "110": "1",
      "111": "0",
    }
    this.initialStates = initialStates
    this.reset()
  }

  next() {
    const currentStates = `0${this.states}0`
    const nextStates = []
    for (let c = 0; c < currentStates.length - 2; c++) {
      const state = currentStates.substring(c, c+3)
      nextStates[c] = this.nextCell(state)
    }
    this.states = nextStates.join("")
  }

  nextCell(state) {
    return this.rule[state]
  }

  reset() {
    this.states = `${this.initialStates}`
  }

  toString() {
    return this.states.replace(/./g, s => s === "0" ? " " : "*")
  }
}

export { CA1Rule90 }

// How to instantiate
//   new CA1({
//     rule:90, 
//     states:[
//       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
//       1,
//       0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
//     ]
//   })
export class CA1 {
  constructor(opts={}) {
    this.rule = opts.rule
    this.initialStates = opts.states
    this.reset()
  }

  next() {
    let curr = [0].concat(this.states, [0])
    for (let c = 1; c < curr.length - 1; c++) {
      const state = 0b100 * curr[c+1] + 0b010 * curr[c] + 0b001 * curr[c-1]
      this.states[c-1] = this.nextCell(state)
    }
  }

  nextCell(state) {
    return (this.rule & (0x1 << state)) >> state
  }

  reset() {
    this.states = [].concat(this.initialStates)
  }

  toString() {
    return this.states.map(c => c === 0 ? " " : "*").join("")
  }
}
