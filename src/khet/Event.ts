module khet {

  export class Event {
    offsetX: number;
    offsetY: number;


    constructor(evt) {
      this.offsetX = evt.offsetX;
      this.offsetY = evt.offsetY;
    }
  }

}
