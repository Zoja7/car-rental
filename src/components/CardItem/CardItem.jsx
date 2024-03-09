import React from 'react';
import { nanoid } from 'nanoid';
import css from './CardItem.module.css'
import DefaultImage from '../../images/vehicle-placeholder.png';

const CardItem = ({ card }) => {
  const {
    img,
    avatar,
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

  const addressParts = address && typeof address === 'string' ? address.split(', ') : []
  const cityAndCountry = addressParts.slice(-2).join('|');

const randomAccessory = accessories && Array.isArray(accessories) && accessories.length > 0
? accessories[Math.floor(Math.random() * accessories.length)]
: '';

  return (
    <li key={nanoid()} className={css.cardItem}>
      <img
        className= {css.cardImage}
        src= {img ||avatar || photoLink}
        alt={make}
        onError={e => {
          e.currentTarget.src = DefaultImage;
        }}
        width={274}
      />
      <div key={nanoid()} className="cardTextContent">
        <h3>
          <span>
            {make} {year}
          </span>
          <span>{rentalPrice}</span>
        </h3>
        <p>
          {cityAndCountry}|{rentalCompany}
        </p>
        <p>
          {type}|{model}|{id}|{randomAccessory}
        </p>
      </div>
    </li>
  );
};

export default CardItem;
