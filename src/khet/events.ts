///<reference path="./Event"/>



module khet {

  export class events {
    static listeners_: Object = {};


    static listen(src: EventTarget, type: string,
        listener: (evt) => void)
    {
      if (!events.listeners_[type]) {
        events.listeners_[type] = [];
      }
      events.listeners_[type].push(listener);
      var proxy = events.getProxy();
      proxy.src = src;
      proxy.key = type;
      src.addEventListener(type, proxy, false);
    }


    static getProxy() {
      var f = function(eventObject) {
        return events.handleBrowserEvent_(f.src, f.key, eventObject);
      };
      return f;
    }


    static handleBrowserEvent_(src, key, evt) {
      var listeners = events.listeners_[key];
      for (var i: number = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        var myEvent = new Event(evt);
        listener.call(src, myEvent);
      }
    }
  }

}
