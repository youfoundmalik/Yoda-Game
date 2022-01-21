import { createSlice } from "@reduxjs/toolkit";

const scores = createSlice({
  name: "scores",
  initialState: {
    currentPlayer: [],
    topPlayers: [],
    playerScore: 0,
  },
  reducers: {
    getPlayerScore(state, action) {
      state.currentPlayer = [...action.payload] || [];
    },
    getHighestScores(state, action) {
      state.topPlayers = [...action.payload] || [];
    },
    calculateScore(state, action) {
      state.playerScore = state.playerScore + parseInt(action.payload);
    },
    resetGame(state) {
      state.playerScore = 0;
    },
  },
});

export const scoresActions = scores.actions;
export default scores;
