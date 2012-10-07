///<reference path="./State"/>
///<reference path="../Button"/>
///<reference path="../ButtonManager"/>



module khet.states {

  export class Menu extends State {
    buttonManager: ButtonManager;


    init() {
      var y: number = 30;
      var step: number = 60;

      var btnClassic = new Button('Classic', 10, y, 150, 50);
      btnClassic.click = function() {
        Core.inst.stateManager.change('Game');
      };

      y += step;
      var btnDynasty = new Button('Dynasty', 10, y, 150, 50);
      btnDynasty.click = function() {
        Core.inst.stateManager.change('Game');
      };

      y += step;
      var btnImhotep = new Button('Imhotep', 10, y, 150, 50);
      btnImhotep.click = function() {
        Core.inst.stateManager.change('Game');
      };

      y += step;
      var btnIsis = new Button('Isis', 10, y, 150, 50);
      btnIsis.click = function() {
        Core.inst.stateManager.change('Game');
      };

      y += step;
      var btnOsiris = new Button('Osiris', 10, y, 150, 50);
      btnOsiris.click = function() {
        Core.inst.stateManager.change('Game');
      };

      this.buttonManager = new ButtonManager();
      this.buttonManager.push(btnClassic);
      this.buttonManager.push(btnDynasty);
      this.buttonManager.push(btnImhotep);
      this.buttonManager.push(btnIsis);
      this.buttonManager.push(btnOsiris);
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.clearRect(0, 0, Core.inst.canvas.width, Core.inst.canvas.height);
      ctx.strokeRect(0.5, 0.5, Core.inst.canvas.width - 1, Core.inst.canvas.height - 1);

      this.buttonManager.render();

      ctx.restore();
    }


    mouseMove(evt: MouseEvent) {
      this.buttonManager.mouseMove(evt);
    }


    click(evt: MouseEvent) {
      this.buttonManager.click(evt);
    }


    dispose() {
      console.log('Menu, Dispose');
    }
  }

}
