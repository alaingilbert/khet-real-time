///<reference path="./State"/>



module khet.states {

  export class Default extends State {

    render() {
      var ctx = khet.Core.inst.ctx;
      ctx.save();
      ctx.fillRect(0, 0, 100, 100);
      ctx.restore();
    };

  }

}
