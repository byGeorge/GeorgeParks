package org.springframework.repository;

import org.springframework.model.HighScore;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class HighScoresImpl implements HighScores {
  public HighScoresImpl(){
    getHighScoreList();
  }
  @Override
  public List<HighScore> getHighScoreList(){
    List<HighScore> scores = new ArrayList<HighScore>();
    HighScore score = new HighScore(7777, LocalDateTime.now());
    scores.add(score);
    return scores;
  }

  @Override
  public boolean createHighScore(){
    return true;
  }
}
