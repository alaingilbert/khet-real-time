///<reference path="../Object2D"/>
///<reference path="./IPiece"/>
///<reference path="./math/Coordinate"/>
///<reference path="../Board"/>



module khet {

  export class Piece extends Object2D implements IPiece {
    static moveDelay: number = 7000;

    lastMove: number;


    constructor(public caseX: number, public caseY: number,
        public team: Team)
    {
      super(0, 0, 60, 60);
      var position: math.Coordinate = Board.getCasePosition(caseX, caseY);
      this.x = position.x;
      this.y = position.y;
    }


    move() {
      this.lastMove = Date.now();
    }


    canMove() {
      return Date.now() - this.lastMove >= Piece.moveDelay;
    }
  }

}
