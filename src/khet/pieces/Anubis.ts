///<reference path="./Piece"/>



module khet.pieces {

  export class Anubis extends Piece {


    constructor(caseX: number, caseY: number, team: Team) {
      super(caseX, caseY, team);
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.translate(this.x, this.y);

      ctx.restore();
    }
  }

}
