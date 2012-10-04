module khet.states {

  export interface IState {
    click: (MouseEvent) => void;
    mouseDown: (MouseEvent) => void;
    mouseUp: (MouseEvent) => void;
    mouseMove: (MouseEvent) => void;
    mouseWheel: (MouseEvent) => void;
    keyDown: (MouseEvent) => void;
    keyUp: (MouseEvent) => void;
    dispose: () => void;
  }

}
