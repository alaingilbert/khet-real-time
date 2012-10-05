///<reference path="./State"/>
///<reference path="../Board"/>



module khet.states {

  export class Menu extends State {
    board: Board;


    init() {
      this.board = new Board(0, 0, 600);
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.clearRect(0, 0, Core.inst.canvas.width, Core.inst.canvas.height);

      this.board.render();

      ctx.restore();
    }


    dispose() {
      console.log('Menu, Dispose');
    }
  }

}
