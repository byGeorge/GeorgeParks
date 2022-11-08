import org.springframework.service.HighScoreService;
import org.springframework.service.HighScoreServiceImpl;

public class Application {
  public static void main(String args[]){
    HighScoreService service = new HighScoreServiceImpl();

    System.out.println("Score" + service.getHighScores().get(0).Score + " at " + service.getHighScores().get(0).Time);
  }
}
