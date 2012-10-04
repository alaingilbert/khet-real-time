///<reference path="./IState"/>


module khet.states {

  export class State implements IState {

    click(evt: MouseEvent) { };
    mouseDown(evt: MouseEvent) { };
    mouseUp(evt: MouseEvent) { };
    mouseMove(evt: MouseEvent) { };
    mouseWheel(evt: MouseEvent) { };
    keyDown(evt: MouseEvent) { };
    keyUp(evt: MouseEvent) { };
    dispose() { };
    update(deltaTime: number) { };
    render() { };
  }

}
