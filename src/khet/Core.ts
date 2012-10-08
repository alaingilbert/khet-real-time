///<reference path="./io.d.ts"/>
///<reference path="./states/StateManager"/>
///<reference path="./states/Default"/>
///<reference path="./states/Menu"/>
///<reference path="./states/Game"/>
///<reference path="./states/Waiting"/>
///<reference path="./states/IState"/>
///<reference path="./pieces/Anubis"/>
///<reference path="./events"/>

///<reference path="./Object2D"/>
///<reference path="./ObjectManager"/>
///<reference path="./IManager"/>



interface Window {
  webkitRequestAnimationFrame(callback: FrameRequestCallback): number;
}



interface MouseEvent {
  stop: bool;
}



module khet {



  export enum Team {
    Gray,
    Red
  }



  export class Core {
    static inst: Core = null;

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    stateManager: states.StateManager;
    lastFrame: number;
    medias: Object;
    socket;
    over: IObject2D;
    selected: IObject2D;
    roomId: string;
    mySide: string;


    constructor(roomId: string) {
      Core.inst = this;
      this.roomId = roomId;
      this.mySide = null;

      this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');

      this.stateManager = new states.StateManager();
      this.socket = io.connect('http://127.0.0.1:5000/');
      this.socket.emit('init', roomId);


      this.socket.on('sideTaken', function(data) {
        $('#btn' + data).attr('disabled', 'disabled');
      });


      this.socket.on('sideFree', function(data) {
        $('#btn' + data).removeAttr('disabled');
      });


      this.socket.on('gotSide', function(data) {
        $('#btn' + data).attr('disabled', 'disabled');
        Core.inst.mySide = data;
        $('#btnStart').removeAttr('disabled');
      });


      this.stateManager.addState('Default', new states.Default());
      this.stateManager.addState('Menu', new states.Menu());
      this.stateManager.addState('Game', new states.Game());
      this.stateManager.addState('Waiting', new states.Waiting());
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
      events.listen(this.canvas, 'click',
          (evt: MouseEvent) => this.click(evt));

      events.listen(this.canvas, 'mousemove',
          (evt: MouseEvent) => this.mouseMove(evt));

      events.listen(this.canvas, 'mousedown',
          (evt: MouseEvent) => this.mouseDown(evt));

      this.canvas.addEventListener('mouseup',
          (evt: MouseEvent) => this.mouseUp(evt), false);

      this.canvas.addEventListener('mousewheel',
          (evt: MouseEvent) => this.mouseWheel(evt), false);

      document.addEventListener('keydown',
          (evt: MouseEvent) => this.keyDown(evt), false);

      document.addEventListener('keyup',
          (evt: MouseEvent) => this.keyUp(evt), false);

      window.addEventListener('resize',
          (evt: MouseEvent) => this.resize(evt), false);
    }


    mouseDown(evt) {
      this.stateManager.state.mouseDown(evt);
    }


    mouseUp(evt) {
    }


    click(evt: MouseEvent) {
      this.stateManager.state.click(evt);
    }

    mouseMove(evt: MouseEvent) {
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
