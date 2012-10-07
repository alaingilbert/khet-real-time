///<reference path="./State"/>
///<reference path="../Loader"/>



module khet.states {

  export class Waiting extends State {


    init() {
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.clearRect(0, 0, Core.inst.canvas.width, Core.inst.canvas.height);
      ctx.strokeRect(0.5, 0.5, Core.inst.canvas.width - 1, Core.inst.canvas.height - 1);


      ctx.restore();
    }


    dispose() {
    }
  }

}
