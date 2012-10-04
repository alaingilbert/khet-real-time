///<reference path="./State"/>



module khet.states {

  export class Default extends State {

    init() {
    };


    render() {
      Core.inst.board.render();
    };
  }

}
