module khet {

  export class BitmapData {
    width: number;
    height: number;
    canvas;
    private x_: number;
    private y_: number;


    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
      this.x_ = 0;
      this.y_ = 0;

      this.canvas = document.createElement('canvas');
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }


    draw(source) {
      this.canvas.drawImage(source, 0, 0);
    }


    scroll(x: number, y: number) {
      this.x_ = x;
      this.y_ = y;
    }


    dispose() {
      this.x_ = null;
      this.y_ = null;
      this.width = null;
      this.height = null;
      this.canvas = null;
    }
  }

}
