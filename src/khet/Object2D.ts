module khet {

  export class Object2D {

    constructor(public x: number, public y: number,
        public width: number, public height: number, public scale?: number = 1,
        public angle?: number = 0) { };
  }

}
