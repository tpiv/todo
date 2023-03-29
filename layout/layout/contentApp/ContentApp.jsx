import React from 'react';

import styles from './contentApp.module.scss';

export default function ContentApp({ children }) {
  return <div className={styles.ContentApp}>{children}</div>;
}
