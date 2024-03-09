export const selectCards = state => state.cardsStore.cards.items;
export const selectCardsIsLoading = state =>
  state.cardsStore.cards.isLoading;
export const selectCardsError = state => state.cardsStore.cards.error;
export const  selectCardsCurrentPage = state => state.cardsStore.cards.currentPage;
export const selectCardsLimit = state => state.cardsStore.cards.limit;