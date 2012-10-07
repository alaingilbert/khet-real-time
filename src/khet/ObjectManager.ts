///<reference path="./IManager"/>
///<reference path="./IObject2D"/>



module khet {

  export class ObjectManager implements IManager {
    objs: IObject2D[];


    constructor() {
      this.objs = [];
    }


    push(obj: IObject2D) {
      this.objs.push(obj);
    }


    indexOf(obj: IObject2D): number {
      return this.objs.indexOf(obj);
    }


    remove(obj: IObject2D): IObject2D {
      var idx = this.objs.indexOf(obj);
      if (idx === -1) {
        return null;
      }

      return this.objs.splice(idx, 1)[0];
    }


    reset() {
      this.objs = [];
    }


    focus(obj: IObject2D) {
      if (this.has(obj)) {
        this.push(this.remove(obj));
      }
    }


    render() {
      for (var i: number = 0; i < this.length(); i++) {
        this.objs[i].render();
      }
    }


    update(deltaTime: number) {
      for (var i: number = 0; i < this.length(); i++) {
        this.objs[i].update(deltaTime);
      }
    }


    length(): number {
      return this.objs.length;
    }


    has(obj: IObject2D) {
      return this.indexOf(obj) !== -1;
    }


    mouseMove(evt: MouseEvent): bool {
      if (evt.stop) { return false; }

      var mouseX: number = evt.offsetX;
      var mouseY: number = evt.offsetY;

      for (var i: number = this.objs.length - 1; i >= 0; i--) {
        var obj: IObject2D = this.objs[i];
        if (obj.isPointInside(mouseX, mouseY)) {
          evt.stop = true;
          if (!obj.over) {
            if (Core.inst.over && Core.inst.over.over) {
              Core.inst.over.over = false;
            }
            Core.inst.over = obj;
            obj.over = true;
            obj.mouseOver(evt);
            break;
          }
          obj.mouseMove(evt);
          break;
        } else {
          if (obj.over) {
            Core.inst.over = null;
            obj.over = false;
            obj.mouseOut(evt);
            break;
          }
        }
      }
      return true;
    }


    mouseDown(evt: MouseEvent) {
      if (evt.stop) { return false; }

      var mouseX: number = evt.offsetX;
      var mouseY: number = evt.offsetY;

      for (var i: number = 0; i < this.objs.length; i++) {
        var obj: IObject2D = this.objs[i];
        if (obj.isPointInside(mouseX, mouseY)) {
          obj.mouseDown(evt);
          break;
        }
      }

      return true;
    }


    click(evt: MouseEvent) {
      if (evt.stop) { return false; }

      var mouseX: number = evt.offsetX;
      var mouseY: number = evt.offsetY;

      for (var i: number = 0; i < this.objs.length; i++) {
        var obj: IObject2D = this.objs[i];
        if (obj.isPointInside(mouseX, mouseY)) {
          obj.click(evt);
          break;
        }
      }

      return true;
    }
  }

}
