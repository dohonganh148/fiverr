import React from 'react';
import styles from "./Trusted.module.scss";
import Facebook from "images/fb.png";
import Google from "images/google.png";
import Netflix from "images/netflix.png";
import Pg from "images/pg.png";
import Paypal from "images/paypal.png";

const Trusted = () => {
    const brands = [
        Facebook,
        Google,
        Netflix,
        Pg,
        Paypal
    ]
  return (
    <div className={styles.trusted}>
        <div className={styles.content}>
            <p>Trusted by:</p>
            <div className={styles.brands}>
                {brands.map( (item, index) => (
                    <img alt='' key={index} src={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Trusted