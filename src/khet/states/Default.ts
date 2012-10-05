///<reference path="./State"/>
///<reference path="../Loader"/>



module khet.states {

  export class Default extends State {
    loader: Loader;


    init() {
      var mediaFiles = ['/images/sprite.png',
                        '/images/ankh.png',
                        '/images/eye.png'];
      this.loader = new Loader(mediaFiles, medias => this.mediasLoaded(medias));
      this.loader.onProgress = progress => this.onProgress(progress);
    }


    onProgress(progress) {
      console.log('Progress:', progress);
    }


    mediasLoaded(medias: Object) {
      Core.inst.medias = medias;
      console.log('loaded', medias);
      Core.inst.stateManager.change('Menu');
    }


    render() {
    }


    dispose() {
      this.loader.dispose();
      this.loader = null;
    }
  }

}
