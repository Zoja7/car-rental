export const selectCards = state => state.cardsStore.cards.items;
export const selectCardsIsLoading = state =>
  state.cardsStore.cards.isLoading;
export const selectCardsError = state => state.cardsStore.cards.error;

