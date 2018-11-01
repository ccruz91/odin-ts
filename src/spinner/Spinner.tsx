import * as React from 'react';
import styles from './Spinner.module.css';

const Spinner = () =>
  <div className={styles['lds-spinner']}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

export default Spinner