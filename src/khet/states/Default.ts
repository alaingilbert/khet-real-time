///<reference path="./State"/>



module khet.states {

  export class Default extends State {

    init() {
    };


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.fillRect(0, 0, 100, 100);
      ctx.restore();
    };
  }

}
