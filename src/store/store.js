import { configureStore } from "@reduxjs/toolkit";
import scores from "./scores";
import apiStatus from "./APIsCallStatus";

const store = configureStore({
  reducer: { scores: scores.reducer, api: apiStatus.reducer },
});

export default store;
