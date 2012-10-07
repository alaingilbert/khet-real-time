module khet {

  export class Event {
    stop: bool;
    offsetX: number;
    offsetY: number;


    constructor(evt) {
      this.stop = false;
      this.offsetX = evt.offsetX;
      this.offsetY = evt.offsetY;
    }
  }

}
