import React from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { MdOutlineExitToApp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import Preload from '../../components/preload/Preload';
import { useKernel } from '../../context/ContextKernel.mjs';

import styles from './headerApp.module.scss';


export default function HeaderApp(props) {
  const { configurationName, userName } = { ...props };
  const navigate = useNavigate();
  const { kernelData } = useKernel();

  const appExit = () => {
    kernelData.removeTimerRefreshToken();
    localStorage.removeItem("token");
    localStorage.removeItem("activeIdConfig");
    kernelData.logoutUser();
    return navigate("/");
  };
  const appBack = () => {
    return navigate("/configuration-selection");
  };

  return (
    <div className={styles.headerApp}>
      <div className={styles.headerAppBlock}>
        <div className={styles.headerAppConfig}>
          {configurationName ? <span className={styles.headerAppConfigName} title={configurationName}>{configurationName}
          </span> : <Preload width={"305px"} height={"33px"} />}

          <BsArrowLeftCircle className={styles.headerAppConfigIcon} onClick={appBack} />
        </div>
        <div className={styles.headerAppUserNameWrap}>
          {userName ? (
            <span className={styles.headerAppUserName}>{`Добро пожаловать в АРМ администратора, ${userName}`}</span>
          ) : (
            <Preload width={"640px"} height={"30px"} />
          )}
        </div>
      </div>
      <div className={styles.headerAppBlock}>
        <div onClick={appExit} className={styles.headerAppExit} >
          <span className={styles.headerAppExitText}>Выйти</span>
          <MdOutlineExitToApp className={styles.headerAppExitIcon} />
        </div>
      </div>
    </div>
  );
}
