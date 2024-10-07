import { configureStore } from "@reduxjs/toolkit";
import searchQuerySlice from "./searchSlice";

const store = configureStore({
  reducer: { searchQuery: searchQuerySlice.reducer },
});

export const searchQueryActions = searchQuerySlice.actions;
export default store;
