import React, { useState } from 'react'
import HeaderStyles from './header.module.css';

export default function Card(props) {
  const {money, click} = { ...props };
    
    return (
      <header className={HeaderStyles.head}>
      <div className={HeaderStyles.logo}>
        <span>Мир обуви</span>
        <span>На заказ</span>
      </div>
      <div className={HeaderStyles.price}>
        <span>{money}$</span>
        <span onClick={click} className={HeaderStyles.cursor}>Корзинка</span>
      </div>
    </header>
    )
}
