package org.springframework.service;

import org.springframework.model.HighScore;

import java.util.List;

public interface HighScoreService {
  List<HighScore> getHighScores();

  boolean createHighScore(int score);
}
