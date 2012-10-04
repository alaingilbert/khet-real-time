///<reference path="./states/StateManager"/>
///<reference path="./states/Default"/>
///<reference path="./states/IState"/>



module khet {

  export class Core {
    stateManager: states.StateManager;

    static inst: Core = null;

    constructor() {
      Core.inst = this;

      this.stateManager = new states.StateManager();
      this.stateManager.addState('Default', new states.Default());
      this.stateManager.change('Default');
      console.log('constructor');
    };
  }

}
