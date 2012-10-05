module khet {

  export interface IManager {
    push: (IObject2D) => void;
    remove: (IObject2D) => IObject2D;
    reset: () => void;
    focus: (IObject2D) => void;
    render: () => void;
    update: (number) => void;
    length: () => number;
    indexOf: (IObject2D) => number;
    has: (IObject2D) => bool;
  }

}
