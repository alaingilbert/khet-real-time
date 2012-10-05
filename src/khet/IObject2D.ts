module khet {

  export interface IObject2D {
    x: number;
    y: number;
    width: number;
    height: number;
    scale: number;
    angle: number;
    render: () => void;
    update: (deltaTime: number) => void;
    isPointInside: (x: number, y: number) => bool;
  }

}
