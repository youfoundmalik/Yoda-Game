import "./App.css";
import { DndProvider } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";
import Router from "./Router";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { scoresActions } from "./store/scores";
import { apiActions } from "./store/APIsCallStatus";

function App() {
  const playerscore = useSelector((state) => state.scores.currentPlayer);
  const dispatch = useDispatch();

  const fetchScoresHandler = useCallback(async () => {
    dispatch(apiActions.setIsLoading(true));
    dispatch(apiActions.setError(null));
    try {
      const response = await fetch(
        "https://yodagame-test-default-rtdb.firebaseio.com/highscores.json"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const refactoredData = [];
      for (const key in data) {
        refactoredData.push({
          id: key,
          player: data[key].player,
          country: data[key].country,
          score: parseInt(data[key].score),
        });
      }

      // sorting for the highest 10 scores
      const sortedData = refactoredData
        .sort((a, b) => {
          return b.score - a.score;
        })
        .slice(0, 15);

      dispatch(scoresActions.getHighestScores(sortedData));
    } catch (error) {
      console.log(error);
      dispatch(apiActions.setIsLoading(false));
      dispatch(apiActions.setError(error.Message));
    }
    dispatch(apiActions.setIsLoading(false));
  }, [dispatch, playerscore]);

  useEffect(() => {
    fetchScoresHandler();
  }, [fetchScoresHandler]);

  return (
    <DndProvider options={HTML5toTouch}>
      <div className="App">
        <Router />
      </div>
    </DndProvider>
  );
}

export default App;
