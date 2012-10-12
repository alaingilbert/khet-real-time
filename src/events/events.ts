module goog {

  class events {
    static private listeners_: Object = {};
    static private listenerTree_: Object = {};
    static private sources_: Object = {};
    static private onString_: string = 'on';
    static private onStringMap_: Object = {};
    static private keySeparator_: string = '_';


    static listen(src, type, listener, opt_capt, opt_handler) {
      if (!type) {
        throw Error('Invalid event type');
      } else if (goog.isArray(type)) {
        for (var i: number = 0; i < type.length; i++) {
          events.listen(src, type[i], listener, opt_capt, opt_handler);
        }
        return null;
      } else {
        var capture = !!opt_capt;
        var map = events.listenerTree_;

        if (!(type in map)) {
          map[type] = {count_: 0, remaining_: 0};
        }
        map = map[type];

        if (!(capture in map)) {
          map[capture] = {count_: 0, remaining_: 0};
          map.count_++;
        }
        map = map[capture];

        var srcUid = goog.getUid(src);
        var listenerArray, listenerObj;

        map.remaining_++;

        if (!map[srcUid]) {
          listenerArray = map[srcUid] = [];
          map.count_++;
        } else {
          listenerArray = map[srcUid];
          for (var i: number = 0; i < listenerArray.length; i++) {
            listenerObj = listenerArray[i];
            if (listenerObj.listener == listener &&
                listenerObj.handler == opt_handler) {

              if (listenerObj.removed) {
                break;
              }

              return listenerArray[i].key;
            }
          }
        }

        var proxy = goog.events.getProxy();
        proxy.src = src;
        listenerObj = new goog.events.Listener();
        listenerObj.init(listener, proxy, src, type, capture, opt_handler);
        var key = listenerObj.key;
        proxy.key = key;

        listenerArray.push(listenerObj);
        goog.events.listeners_[key] = listenerObj;

        if (!goog.events.sources_[srcUid]) {
          goog.events.sources_[src] = [];
        }
        goog.events.sources_[srcUid].push(listenerObj);

        if (src.addEventListener) {
          if (src == goog.global || !src.customEvent_) {
            src.addEventListener(type, proxy, capture);
          }
        } else {
          src.attachEvent(goog.events.getOnString_(type), proxy);
        }

        return key;
      }
    }


    static getProxy() {
      var proxyCallbackFunction = goog.events.handleBrowserEvent_;

      var f = goog.events.BrowserFeature.HAS_W3C_EVENT_SUPPORT ?
          function(eventObject) {
            return proxyCallbackFunction.call(f.src, f.key, eventObject);
          } :
          function(eventObject) {
            var v = proxyCallbackFunction.call(f.src, f.key, eventObject);
            if (!v) return v;
          };
      return f;
    }


    static listenOnce(src, type, listener, opt_capt, opt_handler) {
      if (goog.isArray(type)) {
        for (var i: number = 0; i < type.length; i++) {
          goog.events.listenOnce(src, type[i], listener, opt_capt, opt_handler);
        }
        return null;
      }

      var key = goog.events.listen(src, type, listener, opt_capt, opt_handler);
      var listenerObj = goog.events.listeners_[key];
      listenerObj.callOnce = true;
      return key;
    }


    static listenWithWrapper(src, wrapper, listener, opt_capt, opt_handler) {
      wrapper.listen(src, listener, opt_capt, opt_handler);
    }


    static unlisten(src, type, listener, opt_capt, opt_handler) {
    }
  }

}
