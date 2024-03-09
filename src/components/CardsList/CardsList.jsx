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
    <div className="cardsListWrapper">
      <ul className={css.cardsList}>
        {cards.slice(0, visibleData).map(card => {
          return <CardItem key={nanoid()} card={card} />;
        })}
      </ul>
      {visibleData < cards.length && (
        <button type="button" onClick={handleLoadMore} key={nanoid()}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CardsList;
