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

      var spriteX: number = 2 * 159;
      var spriteY: number = this.team == Team.Gray ? 0 : 159;
      ctx.drawImage(Core.inst.medias['sprite'],
          spriteX, spriteY, 159, 159,
          0, 0, this.width, this.height);


      if (this.over) {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
        ctx.fillRect(0, 0, this.width, this.height);
      }

      ctx.restore();
    }
  }

}
