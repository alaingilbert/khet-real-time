///<reference path="./State"/>
///<reference path="../Board"/>



module khet.states {

  export class Menu extends State {
    board: Board;
    pieceManager: khet.pieces.PieceManager;


    init() {
      this.board = new Board(12, 12, 600);
      this.pieceManager = Core.inst.pieceManager;
      var anubis = new khet.pieces.Anubis(1, 1, Team.Red);
      this.pieceManager.push(anubis);
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.clearRect(0, 0, Core.inst.canvas.width, Core.inst.canvas.height);
      ctx.strokeRect(0.5, 0.5, Core.inst.canvas.width - 1, Core.inst.canvas.height - 1);

      this.board.render();

      ctx.restore();
    }


    mouseMove(evt: MouseEvent) {
      console.log(evt.offsetX, evt.offsetY);
    }


    dispose() {
      console.log('Menu, Dispose');
    }
  }

}
