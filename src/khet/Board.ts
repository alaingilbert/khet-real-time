///<reference path="../math/Coordinate"/>
///<reference path="./Object2D"/>
///<reference path="./BitmapData"/>
///<reference path="./pieces/PieceManager"/>



module khet {

  export class Board extends Object2D {
    static caseWidth: number = 62;
    static backgroundColor: string = '#3e4245';
    static borderColor: string = '#62626b';


    static getCasePosition(caseX: number, caseY: number): math.Coordinate {
      var x: number = caseX * Board.caseWidth;
      var y: number = caseY * Board.caseWidth;
      return new math.Coordinate(x, y);
    }


    static getCase(x: number, y: number): math.Coordinate {
      var caseX: number = Math.floor(x / Board.caseWidth);
      var caseY: number = Math.floor(y / Board.caseWidth);
      return new math.Coordinate(caseX, caseY);
    }


    nbCasesWidth: number;
    nbCasesHeight: number;
    cache: BitmapData;
    pieceManager: pieces.PieceManager;


    constructor(x?: number = 0, y?: number = 0,
        width?: number = 0) {
      super(x, y, 10 * 62, 8 * 62);

      this.nbCasesWidth = 10;
      this.nbCasesHeight = 8;
      this.cache = new BitmapData(this.width, this.height);
      this.pieceManager = new pieces.PieceManager();
      this.generateBoard();
    }


    mouseMove(evt: MouseEvent): bool {
      if (evt.stop) { return false; }

      evt.offsetX -= this.x;
      evt.offsetY -= this.y;
      this.pieceManager.mouseMove(evt);

      return true;
    }


    generateBoard() {
      var imageSize = Board.caseWidth - 2;
      var ctx: CanvasRenderingContext2D = this.cache.canvas.getContext('2d');
      ctx.save();
      ctx.fillStyle = Board.backgroundColor;
      ctx.strokeStyle = Board.borderColor;

      ctx.fillRect(0, 0, this.width, this.height);
      for (var i: number = 0; i < this.nbCasesWidth; i++) {
        ctx.moveTo(i * Board.caseWidth + 0.5, 0);
        ctx.lineTo(i * Board.caseWidth + 0.5, this.height);
        if (i <= this.nbCasesHeight) {
          ctx.moveTo(0, i * Board.caseWidth + 0.5);
          ctx.lineTo(this.width, i * Board.caseWidth + 0.5);
        }
      }
      ctx.stroke();

      var xTranslation: number = 1 + (this.nbCasesWidth - 1) * Board.caseWidth;
      var yTranslation: number = 1;
      for (var i: number = 0; i < this.nbCasesHeight; i++) {
        ctx.drawImage(Core.inst.medias['eye'],
            1, yTranslation, imageSize, imageSize);
        ctx.drawImage(Core.inst.medias['ankh'],
            xTranslation, yTranslation, imageSize, imageSize);
        yTranslation += Board.caseWidth;
      }

      xTranslation = 1 + (this.nbCasesWidth - 2) * Board.caseWidth;
      yTranslation = 1;
      ctx.drawImage(Core.inst.medias['eye'],
          xTranslation, yTranslation, imageSize, imageSize);
      yTranslation += (this.nbCasesHeight - 1) * Board.caseWidth;
      ctx.drawImage(Core.inst.medias['eye'],
          xTranslation, yTranslation, imageSize, imageSize);

      xTranslation = 1 + Board.caseWidth;
      yTranslation = 1;
      ctx.drawImage(Core.inst.medias['ankh'],
          xTranslation, yTranslation, imageSize, imageSize);
      yTranslation += (this.nbCasesHeight - 1) * Board.caseWidth;
      ctx.drawImage(Core.inst.medias['ankh'],
          xTranslation, yTranslation, imageSize, imageSize);

      ctx.restore();
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.translate(this.x, this.y);

      // Draw the board
      ctx.drawImage(this.cache.canvas, 0, 0);

      // Draw every pieces
      this.pieceManager.render();

      ctx.restore();
    }
  }

}
