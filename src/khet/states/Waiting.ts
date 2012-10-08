///<reference path="../jquery.d.ts"/>
///<reference path="../events"/>
///<reference path="./State"/>
///<reference path="../Loader"/>



module khet.states {

  export class Waiting extends State {
    dots: string;
    delay: number;
    counter: number;


    init() {
      this.dots = '.';
      this.delay = 800;
      this.counter = 0;
      $('#btnSilver').bind('click', function(evt) {
        Core.inst.socket.emit('getSeat', 'Silver');
      });

      $('#btnRed').bind('click', function(evt) {
        Core.inst.socket.emit('getSeat', 'Red');
      });
    }


    dispose() {
      $('#btnSilver').unbind('click');
      $('#btnRed').unbind('click');
    }


    getSeat(team: string) {
    }


    update(deltaTime) {
      this.counter += deltaTime;
      if (this.counter >= this.delay) {
        this.counter = 0;
        if (this.dots === '...') {
          this.dots = '';
        } else {
          this.dots += '.';
        }
      }
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.clearRect(0, 0, Core.inst.canvas.width, Core.inst.canvas.height);
      ctx.strokeRect(0.5, 0.5, Core.inst.canvas.width - 1, Core.inst.canvas.height - 1);

      ctx.font = '40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.translate(400, 300);
      ctx.fillText('Take a seat', 0, 0);
      ctx.fillText(this.dots, 0, 40);

      ctx.restore();
    }
  }

}
