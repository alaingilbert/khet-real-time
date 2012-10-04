///<reference path="./State"/>
///<reference path="../Loader"/>



module khet.states {

  export class Default extends State {

    init() {
      var mediaFiles = ['./img/sprite.png', './img/ankh.png', './img/eye.png'];
      var loader = new Loader(mediaFiles, medias => this.mediasLoaded(medias));
      loader.onProgress = progress => this.onProgress(progress);
    };


    onProgress(progress) {
      console.log('Progress:', progress);
    }


    mediasLoaded(medias: Object) {
      console.log('loaded', medias);
    }


    render() {
      var ctx: CanvasRenderingContext2D = khet.Core.inst.ctx;
      ctx.save();
      ctx.fillRect(0, 0, 100, 100);
      ctx.restore();
    };
  }

}
