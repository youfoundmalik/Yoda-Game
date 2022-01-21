import { createSlice } from "@reduxjs/toolkit";

const footerBtn = createSlice({
  name: "footerBtn",
  initialState: {
    landscape: false,
  },
  reducers: {
    flip(state) {
      state.landscape = !state.landscape;
    },
  },
});

export const footerBtnActions = footerBtn.actions
export default footerBtn
