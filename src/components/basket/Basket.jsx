import React from 'react'
import BasketStyles from './basket.module.css';

export default function Card(props) {
    return (
      <div className={BasketStyles.wrapper}>
        <p>В корзине покупок на {props.money} $</p>
      </div>
    )
}
