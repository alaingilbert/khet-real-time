///<reference path="../math/math"/>



module math {

  export class Coordinate {
    x: number;
    y: number;


    constructor(opt_x?: number = 0, opt_y?: number = 0) {
      this.x = opt_x;
      this.y = opt_y;
    }


    clone(): Coordinate {
      return new Coordinate(this.x, this.y);
    }


    static equals(a: Coordinate, b: Coordinate): bool {
      if (a == b) {
        return true;
      }

      if (!a || !b) {
        return false;
      }

      return a.x == b.x && a.y == b.y;
    }


    static distance(a: Coordinate, b: Coordinate): number {
      var dx = a.x - b.x;
      var dy = a.y - b.y;
      return Math.sqrt(dx * dx + dy * dy);
    }


    static magnitude(a: Coordinate): number {
      return Math.sqrt(a.x * a.x + a.y * a.y);
    }


    static azimuth(a: Coordinate): number {
      return math.angle(0, 0, a.x, a.y);
    }


    static squaredDistance(a: Coordinate, b: Coordinate): number {
      var dx = a.x - b.x;
      var dy = a.y - b.y;
      return dx * dx + dy * dy;
    }


    static difference(a: Coordinate, b: Coordinate): Coordinate {
      return new Coordinate(a.x - b.x, a.y - b.y);
    }


    static sum(a: Coordinate, b: Coordinate): Coordinate {
      return new Coordinate(a.x + b.x, a.y + b.y);
    }
  }

}
