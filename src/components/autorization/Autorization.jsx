
import TextFieldCustom from '../textFieldCustom/TextFieldCustom';
import { Button } from '@consta/uikit/Button';

import styles from './autorization.module.css';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


export default function Autorization() {
    const {
        handleSubmit,
        control
    } = useForm ({mode: "onBlur"});
    
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    }
    useEffect(() => {
      
    
      return () => {
        
      }
    }, [])
    

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.elemForm}>
                    <span className={styles.heading}>Вход в личный кабинет</span>
                </div>
                
                <div className={styles.elemForm}>
                    <TextFieldCustom
                        name="constaName"
                        type="text"
                        placeholder="Имя"
                        control={control}
                        rules={{
                            minLength: {
                            value: 2,
                            message: "Имя должно быть длинее 2 символов"
                            },
                            required: "Поле обязательно для заполнения"
                        }}
                    />
                </div>
                
                <div className={styles.elemForm}>
                    <Button label="Войти" />
                </div>
        </form>
    )
}
