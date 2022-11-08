package org.springframework.repository;

import org.springframework.model.HighScore;

import java.util.ArrayList;
import java.util.List;

public class HighScoreImpl {
  public HighScoreImpl(){
    getHighScoreList();
  }
  public List<HighScore> getHighScoreList(){
    List<HighScore> scores = new ArrayList<HighScore>();
    HighScore score = new HighScore();
    return scores;
  }
}
