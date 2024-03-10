import CardItem from 'components/CardItem/CardItem';

import { useSelector } from 'react-redux';
import { selectCards } from 'redux/cards/cards.selectors';
import css from './CardsList.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const CardsList = () => {
  const cards = useSelector(selectCards);
  const [visibleData, setVisibleData] = useState(12);
  const handleLoadMore = () => {
    setVisibleData(prevVisibleData => prevVisibleData + 12);
  };
  return (
    <div className={css.cardsListWrapper}>
      <ul className={css.cardsList}>
        {cards.slice(0, visibleData).map(card => {
          return <CardItem key={nanoid()} card={card} />;
        })}
      </ul>
      {visibleData < cards.length && (
        <button className={css.loadMore} type="button"onClick={handleLoadMore} key={nanoid()}>
          Load more
        </button>
      )}
    </div>
  );
};


export default CardsList;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchCardsThunk, fetchMoreCardsThunk } from 'redux/cards/cards.operations';
// import { selectCards, selectPagination } from 'redux/cards/cards.selectors';
// import CardItem from 'components/CardItem/CardItem';
// import css from './CardsList.module.css';
// import { nanoid } from 'nanoid';

// const CardsList = () => {
//   const dispatch = useDispatch();
//   const cards = useSelector(selectCards);
//   const { currentPage } = useSelector(selectPagination);

//   useEffect(() => {
//     dispatch(fetchCardsThunk());
//   }, [dispatch]);

//   const handleLoadMore = () => {
//     dispatch(fetchMoreCardsThunk(currentPage + 1));
//   };

//   return (
//     <div className="cardsListWrapper">
//       <ul className={css.cardsList}>
//         {cards.map(card => (
//           <CardItem key={nanoid()} card={card} />
//         ))}
//       </ul>
//       <button type="button" onClick={handleLoadMore} key={nanoid()}>
//         Load More
//       </button>
//     </div>
//   );
// };

// export default CardsList;