import React from 'react';
import styles from "./PopularServices.module.scss";

const PopularServices = () => {
  return (
    <div className={styles.services}>
        <div className='container'>
        <h2 className='titleh2'>Popular professional services</h2>
        <div className={styles.content}></div>
        </div>
    </div>
  )
}

export default PopularServices