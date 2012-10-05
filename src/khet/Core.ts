///<reference path="./pieces/PieceManager"/>
///<reference path="./states/StateManager"/>
///<reference path="./states/Default"/>
///<reference path="./states/Menu"/>
///<reference path="./states/IState"/>
///<reference path="./pieces/Anubis"/>

///<reference path="./Object2D"/>
///<reference path="./ObjectManager"/>
///<reference path="./IManager"/>



interface Window {
  webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
};



enum Team {
  Gray,
  Red
}



module khet {

  export class Core {
    static inst: Core = null;

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    stateManager: states.StateManager;
    lastFrame: number;
    medias: Object;
    pieceManager: pieces.PieceManager;


    constructor() {
      Core.inst = this;

      this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');

      this.stateManager = new states.StateManager();
      this.pieceManager = new pieces.PieceManager();

      this.stateManager.addState('Default', new states.Default());
      this.stateManager.addState('Menu', new states.Menu());
      this.stateManager.change('Default');

      this.bindListeners();

      this.lastFrame = Date.now();
      this.cycle();
    }


    cycle() {
      var deltaTime: number = Date.now() - this.lastFrame;
      this.lastFrame = Date.now();
      this.update(deltaTime);
      this.render();
      window.webkitRequestAnimationFrame(requestId => this.cycle());
    }


    render() {
      this.stateManager.state.render();
    }


    update(deltaTime: number) {
      this.stateManager.state.update(deltaTime);
    }


    bindListeners() {
      this.canvas.addEventListener('mousemove', evt => this.mouseMove(evt));
      this.canvas.addEventListener('mousedown', evt => this.mouseDown(evt));
      this.canvas.addEventListener('mouseup', evt => this.mouseUp(evt));
      this.canvas.addEventListener('mousewheel', evt => this.mouseWheel(evt));
      document.addEventListener('keydown', evt => this.keyDown(evt));
      document.addEventListener('keyup', evt => this.keyUp(evt));
      window.addEventListener('resize', evt => this.resize(evt));
    }


    mouseDown(evt) {
    }


    mouseUp(evt) {
    }


    mouseMove(evt) {
      this.stateManager.state.mouseMove(evt);
    }


    mouseWheel(evt) {
    }


    keyDown(evt) {
    }


    keyUp(evt) {
    }


    resize(evt) {
    }
  }

}
