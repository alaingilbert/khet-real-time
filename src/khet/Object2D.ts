///<reference path="./IObject2D"/>



module khet {

  export class Object2D implements IObject2D {


    constructor(public x: number, public y: number,
        public width: number, public height: number, public scale?: number = 1,
        public angle?: number = 0) {
    }


    render() {
    }


    update(deltaTime: number) {
    }


    isPointInside(x: number, y: number): bool {
      return x >= this.x &&
             y >= this.y &&
             x <= this.x + this.width &&
             y <= this.y + this.height;
    }
  }
}
