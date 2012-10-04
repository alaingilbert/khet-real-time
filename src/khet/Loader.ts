module khet {

  export class Loader {
    progress: number;
    total: number;
    nbLoaded: number;
    medias: Object;
    callback: (Object) => void;


    constructor(mediaList: string[], callback: (Object) => void) {
      this.medias = {};
      this.nbLoaded = 0;
      this.progress = 0;
      this.total = mediaList.length;
      this.callback = callback;

      for (var i = 0; i < mediaList.length; i++) {
        var media = mediaList[i];
        this.load(media);
      }
    }


    load(media: string) {
      var path: string = this.getPath(media);
      var fileName: string = this.getFileName(media);
      var extension: string = this.getExtension(media);
      switch (extension) {
        case 'jpg':
        case 'jpeg':
        case 'png':
          this.loadImage(path, fileName, extension);
          break;
        case 'mp3':
        case 'ogg':
          this.loadSound(path, fileName, extension);
          break;
      }
    }


    getPath(mediaString: string): string {
      return '';
    }


    getFileName(mediaString: string): string {
      return '';
    }


    getExtension(mediaString: string): string {
      return '';
    }


    loadImage(path: string, fileName: string, extension: string,
        alias?: string = null)
    {
      var label: string = alias || fileName;

      var image = new Image();
      image.src = '';
      image.onload = () => this.mediaLoaded(label, image);
    }


    loadSound() {
    }


    mediaLoaded(label: string, media) {
      this.nbLoaded++;
      this.progress = this.nbLoaded / this.total * 100;

      this.medias[label] = media;

      if (this.nbLoaded === this.total) {
        this.allMediaLoaded();
      }
    }


    allMediaLoaded() {
      this.callback(this.medias);
    }
  }

}
