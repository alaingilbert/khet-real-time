///<reference path="../Object2D"/>
///<reference path="./IPiece"/>



module khet {

  export class Piece extends Object2D implements IPiece {
    static moveDelay: number = 7000;

    lastMove: number;


    move() {
      this.lastMove = Date.now();
    }


    canMove() {
      return Date.now() - this.lastMove >= Piece.moveDelay;
    }
  }

}
