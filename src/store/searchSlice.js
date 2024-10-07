import { createSlice } from "@reduxjs/toolkit";

const initialQuery = { profession: "", location: "" };
const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState: initialQuery,
  reducers: {
    updateLocation(state, action) {
      state.location = action.payload;
    },
    updateProfession(state, action) {
      state.profession = action.payload;
    },
  },
});

export default searchQuerySlice;
