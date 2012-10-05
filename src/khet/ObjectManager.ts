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
    }


    update(deltaTime: number) {
    }


    length(): number {
      return this.objs.length;
    }


    has(obj: IObject2D) {
      return this.indexOf(obj) !== -1;
    }
  }

}
