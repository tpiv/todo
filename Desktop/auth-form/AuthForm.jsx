import React from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { useKernel } from '../../context/ContextKernel.mjs';
import {AuthService} from '../../services/services.mjs';

import styles from './authForm.module.scss';

export default function AuthForm(props) {
  const {setIsErorr, setErrorMessage} = {...props};

  const navigate = useNavigate();
  const {kernelData} = useKernel();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });


  const onSubmit = async (data) => {
    try {
      const response = await AuthService.login(data); //тут получу токен
      const token = response.data.accessToken;
      localStorage.setItem('token', token);

      const user = jwt_decode(token);
      user.token = token;
      kernelData.authUser(user);
      reset();
      return navigate("/section-selection");

    } catch (error) {
      setIsErorr(true);
      const errorMessage = error.response.data.message || "Ошибка!";
      setErrorMessage(errorMessage);
      console.warn('error: ', error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.inputWrap}>
          <input
            className={classNames(styles.input, errors.name && styles.inputError)}
            type="text"
            placeholder="Имя пользователя"
            {...register('name', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 3,
                message: 'Поле должно содержать минимум 3 символа',
              },
              maxLength: {
                value: 32,
                message: 'Поле может содержать максимум 32 символа',
              },
            })}
          />
          {errors?.name && <p className={styles.errorMessage}>{errors?.name?.message || 'Ошибка заполнения!'}</p>}
        </div>
        <div className={styles.inputWrap}>
          <input
            className={classNames(styles.input, errors.password && styles.inputError)}
            type="password"
            autoComplete="current-password"
            placeholder="Пароль"
            {...register('password', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Поле должно содержать минимум 5 символа',
              },
              maxLength: {
                value: 16,
                message: 'Поле может содержать максимум 16 символа',
              },
            })}
          />
          {errors?.password && <p className={styles.errorMessage}>{errors?.password?.message || 'Ошибка заполнения!'}</p>}
        </div>
      </div>
      <button className={classNames(styles.button, !isValid && styles.formNoValid, isValid && styles.formValid)} type="submit" disabled={!isValid}>
        Войти
      </button>
    </form>
  );
}
