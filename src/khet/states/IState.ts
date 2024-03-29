module khet.states {

  export interface IState {
    click: (MouseEvent) => void;
    mouseDown: (MouseEvent) => void;
    mouseUp: (MouseEvent) => void;
    mouseMove: (MouseEvent) => void;
    mouseWheel: (MouseEvent) => void;
    keyDown: (MouseEvent) => void;
    keyUp: (MouseEvent) => void;
    init: () => void;
    dispose: () => void;
    update: (deltaTime: number) => void;
    render: () => void;
  }

}
