import React from 'react';
import { nanoid } from 'nanoid';
import css from './CardItem.module.css';
import DefaultImage from '../../images/vehicle-placeholder.png';

const CardItem = ({ card }) => {
  const {
    img,
    photoLink,
    make,
    year,
    rentalPrice,
    type,
    address,
    rentalCompany,
    model,
    id,
    accessories,
  } = card;

  const addressParts =
    address && typeof address === 'string' ? address.split(', ') : [];
  const cityAndCountry = addressParts.slice(-2).join(' | ');

  const randomAccessory =
    accessories && Array.isArray(accessories) && accessories.length > 0
      ? accessories[Math.floor(Math.random() * accessories.length)]
      : '';

  return (
    <li key={nanoid()} className={css.cardItem}>
      <img
        loading="lazy"
        className={css.cardImage}
        src={img || photoLink}
        alt={make}
        onError={e => {
          e.currentTarget.src = DefaultImage;
        }}
        width={274}
      />
      <div key={nanoid()} className={css.cardTextContent}>
        <h3 className={css.titleWrapper}>
          <p className={css.model}>
            {make} {year}
          </p>
          <p className={css.price}>
            {rentalPrice}
          </p>
        </h3>
        <p className={css.addressAndCompany}>
          {cityAndCountry} | {rentalCompany} | Premium
        </p>
        <p className={css.features}>
          {type} | {model} | {id} | {randomAccessory}
        </p>
      </div>
       <button className= {css.learnMore}>Learn more</button>
    </li>
  );
};

export default CardItem;
