package org.springframework.model;

public class GameBoard {
  private int BoardValues[];

  public GameBoard() {
    BoardValues = new int[81];
  }

  public int GetGameBoardValue(int x, int y){
    int BoardCoord = (y * 9) + x;
    return BoardValues[BoardCoord];
  }

  public int[] GetAllGameBoardValues(){
    return BoardValues;
  }

  private boolean SetGameBoardValue(int x, int y){
    return true;
  }

  private boolean InitiateGameBoard(){
    return true;
  }

}
