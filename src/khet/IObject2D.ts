module khet {

  export interface IObject2D {
    x: number;
    y: number;
    width: number;
    height: number;
    scale: number;
    angle: number;
    over: bool;
    render: () => void;
    update: (deltaTime: number) => void;
    isPointInside: (x: number, y: number) => bool;
    mouseMove: (MouseEvent) => bool;
    mouseOver: (MouseEvent) => void;
    mouseOut: (MouseEvent) => void;
  }

}
