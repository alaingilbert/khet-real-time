///<reference path="./Object2D"/>



module khet {

  export class Button extends Object2D {
    text: string;


    constructor(text: string, x: number, y: number, width: number, height: number) {
      super(x, y, width, height);
      this.text = text;
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.translate(this.x, this.y);

      ctx.fillStyle = this.over ? '#eee' : '#ccc';
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.strokeRect(0.5, 0.5, this.width, this.height);

      ctx.translate(this.width / 2, this.height / 2);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '20px arial';
      ctx.fillStyle = 'black';
      ctx.fillText(this.text, 0, 0);

      ctx.restore();
    }
  }

}
