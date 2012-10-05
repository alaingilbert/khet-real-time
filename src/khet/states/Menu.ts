///<reference path="./State"/>
///<reference path="../Board"/>



module khet.states {

  export class Menu extends State {
    board: Board;


    init() {
      this.board = new Board(12, 12, 600);
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.clearRect(0, 0, Core.inst.canvas.width, Core.inst.canvas.height);
      ctx.strokeRect(0.5, 0.5, Core.inst.canvas.width - 1, Core.inst.canvas.height - 1);

      this.board.render();

      ctx.restore();
    }


    dispose() {
      console.log('Menu, Dispose');
    }
  }

}
