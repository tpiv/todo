import React, { useState } from 'react'
import cardStyles from './card.module.css';
import classNames from 'classnames';

export default function Card(props) {
  const { id, name, prise, summ} = { ...props };
  const [color, setColor] = useState(false);

  const [count, setCount] = useState(0);

  const like = () => {
    setColor(!color);
  }
  const plus = () => {
    setCount(count+1);
    summ(prise, "+");
  }
  const minus = () => {
    if(count > 0) {
      setCount(count-1);
      summ(prise, "-");
    }
  }

  return (
    <div className={cardStyles.card}>
      <span>{name}</span>
      <span>Цена:</span>
      <b>{prise} $</b>
      <span>{count} штук</span>
      <button onClick={plus}>+</button> 
      <button onClick={minus}>-</button> 
      <button onClick={like} className={color? cardStyles.likeYes: null}>ай,нравицца</button>
    </div>
  )
}
