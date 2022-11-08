package org.springframework.service;

import org.springframework.model.HighScore;
import org.springframework.repository.HighScores;
import org.springframework.repository.HighScoresImpl;

import java.util.List;

public class HighScoreServiceImpl implements HighScoreService {
  private HighScores highScoresRepository = new HighScoresImpl();
  private List<HighScore> highScoreList = highScoresRepository.getHighScoreList();

  @Override
  public List<HighScore> getHighScores(){
    return highScoreList;
  }

  @Override
  public boolean createHighScore(int score) {
    return true;
  }
}
