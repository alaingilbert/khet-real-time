///<reference path="./Object2D"/>



module khet {

  export class Board extends Object2D {
    static backgroundColor = '#3e4245';
    static borderColor = '#62626b';

    caseWidth: number;


    constructor(x?: number = 0, y?: number = 0,
        width?:number = 0) {
      super(x, y, width, width);
      this.caseWidth = Math.floor(this.width / 10);
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.fillStyle = Board.backgroundColor;
      ctx.strokeStyle = Board.borderColor;

      for (var i=0; i<10; i++) {
        for (var j=0; j<8; j++) {
          //ctx.fillRect(i*(caseSize+2), j*32, (caseSize+2), (caseSize+2));
          //ctx.strokeRect(i*(caseSize+2)+0.5, j*(caseSize+2)+0.5, caseSize+1.5, caseSize+1.5);
        }
      }

      ctx.fillRect(0, 0, 100, 100);
      ctx.restore();
    }
  }

}
