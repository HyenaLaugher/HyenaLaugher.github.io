import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./Store";

interface activeSelectionState {
  crawlerID?: number;
  mechID?: number;
}

const initialState: activeSelectionState = {
  crawlerID: undefined,
  mechID: undefined,
};

export const activeSelectionSlice = createSlice({
  name: "activeSelection",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateActiveCrawler: (state, action: PayloadAction<number>) => {
      state.crawlerID = action.payload;
    },

    updateActiveMech: (state, action: PayloadAction<number>) => {
      state.mechID = action.payload;
    },
  },
});

export const { updateActiveCrawler, updateActiveMech } =
  activeSelectionSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file.
export const selectActiveCrawler = (state: RootState) =>
  state.activeSelection.crawlerID;
export const selectActiveMech = (state: RootState) =>
  state.activeSelection.mechID;

export const saveActiveCrawler =
  (details: number): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateActiveCrawler(details));
  };
export const saveActiveMech =
  (details: number): AppThunk =>
  (dispatch, getState) => {
    dispatch(updateActiveMech(details));
  };

export default activeSelectionSlice.reducer;
