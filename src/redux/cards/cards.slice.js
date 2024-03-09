import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCardsThunk } from './cards.operations';

const initialState = {
  cards: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const cardsSlice = createSlice({
  // slice`s name
  name: 'cards',
  // initial state of the slice
  initialState,
  // object of the redusers
  reducers: {},

  extraReducers: builder =>
    builder
      .addCase(fetchCardsThunk.fulfilled, (state, { payload }) => {
        state.cards.isLoading = false;
        state.cards.error = null;
        state.cards.items = Array.isArray(payload) ? payload : [];
      })

      .addMatcher(isAnyOf(fetchCardsThunk.pending), state => {
        state.cards.isLoading = true;
        state.cards.error = null;
      })
      .addMatcher(isAnyOf(fetchCardsThunk.rejected), (state, { payload }) => {
        state.cards.isLoading = false;
        state.cards.error = payload;
      }),
});

// slice`s reduser
export const cardsReducer = cardsSlice.reducer;
