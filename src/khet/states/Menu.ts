///<reference path="./State"/>
///<reference path="../Board"/>



module khet.states {

  export class Menu extends State {
    board: Board;


    init() {
      this.board = new Board();
    }


    render() {
      this.board.render();
    }


    dispose() {
      console.log('Menu, Dispose');
    }
  }

}
