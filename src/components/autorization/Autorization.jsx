import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@consta/uikit/Button';
import { IconUser } from '@consta/icons/IconUser';
import { IconLock } from '@consta/icons/IconLock';
import { TextField } from "@consta/uikit/TextField";
import { Text } from '@consta/uikit/Text';

import styles from './autorization.module.css';



export default function Autorization() {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    }

    useEffect(() => {


        return () => {

        }
    }, [])

    const [inn, setInn] = useState(null);
    const handleInn = (val) => setInn(val.value);
    const [pass, setPass] = useState(null);
    const handlePass = (val) => setPass(val.value);

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapperForm}>
                <div className={styles.elemForm}>
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
                    />
                    <div>
                        {/* {errors?.inn && <span className={styles.errors}>{errors?.inn?.message || "Ошибка"}</span>} */}
                        {errors?.inn && <Text view="alert">{errors?.inn?.message || "Ошибка"}</Text>}
                    </div>
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
                    />
                    <div>
                        {errors?.pass && <Text view="alert">{errors?.pass?.message || "Ошибка"}</Text>}
                    </div>
                </div>

                <div className={styles.elemForm}>
                    <Button label="Войти" form="round" />
                </div>

                <div className={styles.elemForm}>
                    <div className={styles.lowerWrapper}>
                        <span>Забыли пароль?</span>
                        <span><a href="">Восстановить</a></span>
                    </div>
                    <span><a href="">Техническая поддержка</a></span>
                </div>
            </div>
        </form>
    )
}
