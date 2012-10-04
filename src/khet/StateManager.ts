///<reference path="./IState"/>



module khet.state {

  export class StateManager {
    states: Object;
    state: IState;
    label: string;


    constructor() {
      this.states = {};
    };


    is(label: string) {
      return label === this.label;
    };


    addState(label: string, state: IState) {
      this.states[label] = state;
    };


    change(label: string) {
      if (!this.states[label]) {
        throw new Error('StateManager -> State not found. (' +
            label + ')');
      }

      if (this.state) {
        this.state.dispose();
      }

      this.label = label;
      this.state = this.states[label];
    };
  }

}
