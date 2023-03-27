import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { AuthForm, ErrorMessagePopup, VersionProject } from '../../components/components.mjs';
import { useKernel } from '../../context/ContextKernel.mjs';
import { AuthService } from '../../services/services.mjs';

import styles from './autorization.module.scss';


export default function Autorization() {
  const navigate = useNavigate();
  const { kernelData } = useKernel();
  const [isErorr, setIsErorr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Ошибка!");
  const token = localStorage.getItem('token');


  const redirectPage = () => {
    return navigate('/section-selection');
  };
  const redirectLoginPage = () => {
    kernelData.removeTimerRefreshToken();
    localStorage.removeItem("token");
    localStorage.removeItem("activeIdConfig");
    kernelData.logoutUser();
    navigate('/');
  };

  const validUser = async () => {
    try {
      if (token != null) {
        const response = await AuthService.valid();
        const valid = response.data.jwtValid;
        if (valid) {
          const user = jwt_decode(token);
          kernelData.authUser(user);
          redirectPage();
        } else {
          return redirectLoginPage();
        }
      } else {
        return redirectLoginPage();
      }
    } catch (error) {
      console.log('error: ', error);
      return redirectLoginPage();
    }
  };

  const actionPerform = () => {
    setIsErorr(false);
  };

  useEffect(() => {
    validUser();
    return () => { };
  }, []);

  return (
    <div className={styles.autorization}>
      {isErorr &&
        <ErrorMessagePopup
          errorMessage={errorMessage}
          actionPerform={actionPerform}
        />}
      <div className={styles.wrap}>
        <div className={styles.containerLogo}>
          <svg className={styles.logoImg} width="70" height="60" viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8782 27.3351L26.9959 32.8878L39.204 16.7348L57.9473 31.066L70.1064 27.4744L35.774 -1.81136e-05L20.8782 27.3351Z" fill="white" />
            <path d="M49.3199 31.7549L43.221 26.2171L31.0012 42.3609L12.3105 28.0714L0.162312 31.6716L34.3961 59.0679L49.3199 31.7549Z" fill="white" />
          </svg>
          <h1 className={styles.logoName}>ООО Арквантум</h1>
        </div>

        <div className={styles.container}>
          <h2 className={styles.title}>
            АРМ <br /> администратора
          </h2>
          <AuthForm setIsErorr={setIsErorr} setErrorMessage={setErrorMessage} />
          <VersionProject />
        </div>
      </div>
    </div>
  );
}
