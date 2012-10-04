module khet {

  export class Loader {
    progress: number;
    total: number;
    nbLoaded: number;
    medias: Object;
    allMediaLoaded: (Object) => void;


    constructor(mediaList: string[], callback: (Object) => void) {
      this.medias = {};
      this.nbLoaded = 0;
      this.progress = 0;
      this.total = mediaList.length;
      this.allMediaLoaded = callback;

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
      var slashIdx = mediaString.lastIndexOf('/') + 1;
      return mediaString.substring(0, slashIdx);
    }


    getFileName(mediaString: string): string {
      var pointIdx = mediaString.lastIndexOf('.');
      var slashIdx = mediaString.lastIndexOf('/') + 1;
      return mediaString.substring(pointIdx, slashIdx);
    }


    getExtension(mediaString: string): string {
      var idx = mediaString.lastIndexOf('.') + 1;
      return mediaString.substr(idx);
    }


    loadImage(path: string, fileName: string, extension: string,
        alias?: string = null)
    {
      var label: string = alias || fileName;

      var image = new Image();
      image.src = path + fileName + '.' + extension;
      image.onload = () => this.mediaLoaded(label, image);
    }


    loadSound(path: string, fileName: string, extension: string,
        alias?: string)
    {
    }


    mediaLoaded(label: string, media) {
      this.nbLoaded++;
      this.progress = this.nbLoaded / this.total * 100;
      this.onProgress(this.progress);

      this.medias[label] = media;

      if (this.nbLoaded === this.total) {
        this.allMediaLoaded(this.medias);
      }
    }


    onProgress(progress: number) {
    }


    dispose() {
      this.nbLoaded = null;
      this.total = null;
      this.progress = null;
      this.medias = null;
    }
  }

}
