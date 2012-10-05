///<reference path="./Object2D"/>
///<reference path="./BitmapData"/>



module khet {

  export class Board extends Object2D {
    static backgroundColor = '#3e4245';
    static borderColor = '#62626b';

    caseWidth: number;
    nbCasesWidth: number;
    nbCasesHeight: number;
    cache: BitmapData;


    constructor(x?: number = 0, y?: number = 0,
        width?:number = 0) {
      super(x, y, 10 * 62, 8 * 62);

      this.caseWidth = 62;
      this.nbCasesWidth = 10;
      this.nbCasesHeight = 8;
      this.cache = new BitmapData(this.width, this.height);
      this.init();
    }


    init() {
      var imageSize = this.caseWidth - 2;
      var ctx: CanvasRenderingContext2D = this.cache.canvas.getContext('2d');
      ctx.save();
      ctx.fillStyle = Board.backgroundColor;
      ctx.strokeStyle = Board.borderColor;

      ctx.fillRect(0, 0, this.width, this.height);
      for (var i: number = 0; i < this.nbCasesWidth; i++) {
        ctx.moveTo(i * this.caseWidth + 0.5, 0);
        ctx.lineTo(i * this.caseWidth + 0.5, this.height);
        if (i <= this.nbCasesHeight) {
          ctx.moveTo(0, i * this.caseWidth + 0.5);
          ctx.lineTo(this.width, i * this.caseWidth + 0.5);
        }
      }
      ctx.stroke();

      var xTranslation: number = 1 + (this.nbCasesWidth - 1) * this.caseWidth;
      var yTranslation: number = 1;
      for (var i: number = 0; i < this.nbCasesHeight; i++) {
        ctx.drawImage(Core.inst.medias['eye'],
            1, yTranslation, imageSize, imageSize);
        ctx.drawImage(Core.inst.medias['ankh'],
            xTranslation, yTranslation, imageSize, imageSize);
        yTranslation += this.caseWidth;
      }

      xTranslation = 1 + (this.nbCasesWidth - 2) * this.caseWidth;
      yTranslation = 1;
      ctx.drawImage(Core.inst.medias['eye'],
          xTranslation, yTranslation, imageSize, imageSize);
      yTranslation += (this.nbCasesHeight - 1) * this.caseWidth;
      ctx.drawImage(Core.inst.medias['eye'],
          xTranslation, yTranslation, imageSize, imageSize);

      xTranslation = 1 + this.caseWidth;
      yTranslation = 1;
      ctx.drawImage(Core.inst.medias['ankh'],
          xTranslation, yTranslation, imageSize, imageSize);
      yTranslation += (this.nbCasesHeight - 1) * this.caseWidth;
      ctx.drawImage(Core.inst.medias['ankh'],
          xTranslation, yTranslation, imageSize, imageSize);

      ctx.restore();
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.drawImage(this.cache.canvas, 0, 0);
      ctx.restore();
    }
  }

}
