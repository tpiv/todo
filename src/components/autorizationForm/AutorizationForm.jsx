import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@consta/uikit/Button';
import { IconUser } from '@consta/icons/IconUser';
import { IconLock } from '@consta/icons/IconLock';
import { TextField } from "@consta/uikit/TextField";

import styles from './autorizationForm.module.css';



export default function AutorizationForm() {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ mode: "all" });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    }

    const [inn, setInn] = useState(null);
    const handleInn = (val) => setInn(val.value);
    const [pass, setPass] = useState(null);
    const handlePass = (val) => setPass(val.value);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapperForm}>
                <div className={styles.elemFormHead}>
                    <span className={styles.heading}>Вход в личный кабинет</span>
                </div>

                <div className={styles.elemForm}>
                    <TextField
                        {...register('inn', {
                            required: "Поле не должно быть пустым",
                            pattern: {
                                value: /^([0-9]{10})?$/,
                                message: "ИНН юр лиц состоит из 10 цифр"
                            }
                        })}
                        onChange={handleInn}
                        value={inn}
                        type="text"
                        placeholder="ИНН"
                        leftSide={IconUser}
                        label="Введите ИНН"
                        status={errors?.inn ? "alert" : "undefined"}
                        caption={errors?.inn ? errors?.inn?.message : ""}
                    />
                </div>

                <div className={styles.elemForm}>
                    <TextField
                        {...register('pass', {
                            required: "Поле не должно быть пустым",
                            minLength: {
                                value: 5,
                                message: "Не менее 5 символов"
                            },
                            maxLength: {
                                value: 20,
                                message: "Не более 20 символов"
                            }
                        })}
                        onChange={handlePass}
                        value={pass}
                        type="password"
                        placeholder="Пароль"
                        leftSide={IconLock}
                        label="Введите пароль"
                        status={errors?.pass ? "alert" : "undefined"}
                        caption={errors?.pass ? errors?.pass?.message : ""}
                    />
                   
                </div>

                <div className={styles.elemForm}>
                    <Button label="Войти" form="round" />
                </div>

                <div className={styles.elemForm}>
                    <div className={styles.lowerWrapper}>
                        <span>Забыли пароль?</span>
                        <span className={styles.spanLink}>Восстановить</span>
                    </div>
                    <span><a href="">Техническая поддержка</a></span>
                </div>
            </div>
        </form>
    )
}
