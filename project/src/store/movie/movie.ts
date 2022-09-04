import { createSlice} from '@reduxjs/toolkit';
import { NameSpace } from '../../const/enums';
import { currentFilmInitialState } from '../../const/initial-states';
import { addReviewAction, fetchCurrentFilmDataAction} from './movie-api-actions';

export const currentFilm = createSlice({
  name: NameSpace.CurrentFilm,
  initialState: currentFilmInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentFilmDataAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchCurrentFilmDataAction.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoaded = true;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isAddingReview = true;
      })
      .addCase(addReviewAction.fulfilled, (state) => {
        state.isAddingReview = false;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.isAddingReview = false;
      });
  }
});
