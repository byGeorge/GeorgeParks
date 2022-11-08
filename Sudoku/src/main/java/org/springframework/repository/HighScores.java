package org.springframework.repository;

import java.util.List;

public interface HighScores {
    List<org.springframework.model.HighScore> getHighScoreList();
    boolean createHighScore();
}
