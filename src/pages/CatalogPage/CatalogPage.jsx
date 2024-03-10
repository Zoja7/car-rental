import CardsList from 'components/CardsList/CardsList';
// import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCardsThunk } from 'redux/cards/cards.operations';
import {
  selectCards,
  selectCardsError,
  selectCardsIsLoading,
} from 'redux/cards/cards.selectors';


const CatalogPage = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);
  const isLoading = useSelector(selectCardsIsLoading);
  const error = useSelector(selectCardsError);
 
  const showCards = !error && !isLoading && cards && cards.length > 0;
  useEffect(() => {
   
    dispatch(fetchCardsThunk())
      .then(() => {
        alert('Contacts downloaded successfully!');
        // toast.info('Contacts downloaded successfully!', {});
      })
      .catch(error => {
        alert(`Error downloading contacts: ${error}`);
        // toast.info(`Error downloading contacts: ${error}`, {});
      });
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {showCards && <CardsList />}
    </>
  );
};

export default CatalogPage;
