import { configureStore } from "@reduxjs/toolkit";
import scores from "./scores";
import apiStatus from "./APIsCallStatus";
import footerBtn from "./FooterButtons";

const store = configureStore({
  reducer: {
    scores: scores.reducer,
    api: apiStatus.reducer,
    footerBtn: footerBtn.reducer,
  },
});

export default store;
