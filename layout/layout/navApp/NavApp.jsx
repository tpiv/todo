import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import { NavControl, NavList, NavSettings } from '../../components/components.mjs';
import { useKernel } from '../../context/ContextKernel.mjs';

import styles from './navApp.module.scss';

export default function NavApp() {
  const { kernelData } = useKernel();
  const initialStateFromSidebar = kernelData.getSidebarState();
  const [sidebar, setSidebar] = useState(initialStateFromSidebar);
  const [componentVisible, setComponentVisible] = useState(kernelData?.sidebar);//показывать компонент на определенном разрешении экрана или нет

  const resizeHandler = () => {
    const clientWidth = window.screen.width;

    if (clientWidth < 1600) {
      setComponentVisible(false);
      setSidebar(true);
    } else {
      setComponentVisible(true);
      setSidebar(kernelData.getSidebarState());
    }
  };


  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);


  return (
    <nav className={classNames(styles.navApp, sidebar && styles.navAppActive)}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <svg className={styles.logoImg} viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.8782 27.3351L26.9959 32.8878L39.204 16.7348L57.9473 31.066L70.1064 27.4744L35.774 -1.81136e-05L20.8782 27.3351Z" fill="white" />
            <path d="M49.3199 31.7549L43.221 26.2171L31.0012 42.3609L12.3105 28.0714L0.162312 31.6716L34.3961 59.0679L49.3199 31.7549Z" fill="white" />
          </svg>
        </div>
        <div className={styles.navControl}>
          {componentVisible ? <NavControl sidebar={sidebar} sidebarControl={setSidebar} /> : <></>}
        </div>
        <div className={styles.navListWrap}>
          <NavList sidebar={sidebar} />
        </div>
      </div>

      <div className={styles.settings}>
        <NavSettings sidebar={sidebar} />
      </div>
    </nav>
  );
}
