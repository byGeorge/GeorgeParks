package org.springframework.model;

import java.time.LocalDateTime;

public class HighScore {
  public int Score;
  public LocalDateTime Time;

  public HighScore(int score, LocalDateTime time){
    Score = score;
    Time = time;
  }
}
