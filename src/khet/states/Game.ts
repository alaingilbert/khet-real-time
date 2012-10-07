///<reference path="./State"/>
///<reference path="../Board"/>



module khet.states {

  export class Game extends State {
    board: Board;
    pieceManager: khet.pieces.PieceManager;


    init() {
      this.board = new Board(30, 0, 600);
      this.pieceManager = this.board.pieceManager;
      var anubis = new khet.pieces.Anubis(1, 1, Team.Gray);
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
      var x: number = evt.offsetX;
      var y: number = evt.offsetY;
      this.board.mouseMove(evt);
      //console.log(x, y, Board.getCase(x, y).toString());
    }


    click(evt: MouseEvent) {
      this.board.click(evt);
    }


    dispose() {
      console.log('Game, Dispose');
    }
  }

}
