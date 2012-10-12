module events {

  class Event {
    type: string;
    target: Object;
    currentTarget: Object;
    propagationStopped_: boolean = false;
    defaultPrevented: boolean = false;
    returnValue_: boolean = true;


    constructor(type: string, opt_target?: Object) {
      this.type = type;
      this.target = opt_target;
      this.currentTarget = this.target;
    }


    stopPropagation() {
      this.propagationStopped_ = true;
    }


    preventDefault() {
      this.defaultPrevented = true;
      this.returnValue_ = false;
    }


    static stopPropagation(e: events.Event) {
      e.stopPropagation();
    }


    static preventDefault(e: events.Event) {
      e.preventDefault();
    }
  }

}
