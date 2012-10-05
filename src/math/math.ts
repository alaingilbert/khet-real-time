module math {

  export class math {


    static modulo(a: number, b: number): number {
      var r = a % b;
      // If r and b differ in sign, add b to wrap the result to the correct
      // sign.
      return (r * b < 0) ? r + b : r;
    }


    static standardAngle(angle: number): number {
      return math.modulo(angle, 360);
    }


    static toDegrees(angleRadians: number): number {
      return angleRadians * 180 / Math.PI;
    }


    static angle(x1: number, y1: number, x2: number, y2: number): number {
      return math.standardAngle(math.toDegrees(Math.atan2(y2 - y1, x2 - x1)));
    }
  }

}
