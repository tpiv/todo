import React from 'react'
import { useForm } from 'react-hook-form';

import style from './orderForm.module.css';


export default function OrderForm() {

  const {register, 
    formState: {errors},
    handleSubmit,
    reset
    } = useForm({mode: "onBlur"});

    const sub = (data) => {
      alert(JSON.stringify(data));
      // reset();
    }

    return (
      <form className={style.wrapper} onSubmit={handleSubmit(sub)}>
        <label>
          <input className={style.elemForms} placeholder="Имя" {...register('name', {
            required: "Поле не должно быть пустым",
            pattern: {
              value: /^[а-яё -]+$/i,
              message: "Только русские буквы, минимальная длинна 3 буквы"
            }
          })} />
        </label>
        <div>
          {errors?.name && <span className={style.errors}>{errors?.name?.message || "Ошибка"}</span>}
        </div>
        <label>
          <input className={style.elemForms} placeholder="Возраст" type="number" {...register('age', {
            required: "Поле не должно быть пустым",
            min : {
              value: 18,
              message: "Только для совершеннолетних"
            }
          })} />
        </label>
        <div>
          {errors?.age && <span className={style.errors}>{errors?.age?.message || "Ошибка"}</span>}
        </div>
        <label>
        <button className={style.elemForms} type="submit">Отправить</button>
        </label>
      </form>
  );
}
