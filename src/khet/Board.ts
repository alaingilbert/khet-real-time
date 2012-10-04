///<reference path="./Object2D"/>



module khet {

  export class Board extends Object2D {
    caseWidth: number;


    constructor(x?: number = 0, y?: number = 0,
        width?:number = 0) {
      super(x, y, width, width);
      this.caseWidth = Math.floor(this.width / 10);
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.fillRect(0, 0, 100, 100);
      ctx.restore();
    }
  }

}
