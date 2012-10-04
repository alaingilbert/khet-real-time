///<reference path="./StateManager"/>
///<reference path="./Default"/>
///<reference path="./IState"/>



module khet {

  export class Core {
    stateManager: state.StateManager;

    static inst: Core = null;

    constructor() {
      Core.inst = this;

      this.stateManager = new state.StateManager();
      this.stateManager.addState('Default', new state.Default());
      this.stateManager.change('Default');
      console.log('constructor');
    };
  }

}
