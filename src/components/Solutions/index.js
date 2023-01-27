import React from 'react';
import styles from "./Solutions.module.scss";
import { BsCheckCircle } from "react-icons/bs";
import Business from "images/Solutions/business.webp";
import clsx from 'clsx';

const Solutions = () => {
    const items = [
        {
            desc: "Connect to freelancers with proven business experience"
        },
        {
            desc: "Get matched with the perfect talent by a customer success manager"
        },
        {
            desc: "Manage teamwork and boost productivity with one powerful workspace"
        },
    ]
  return (
    <div className={styles.solutions}>
        <div className='container'>
            <div className={styles.content}>
                <div className={styles.col1}>
                    <div className={styles.logo}>
                        <p><span>fiverr</span> business.</p>
                        <button>NEW</button>
                    </div>
                    <h2>A business solution designed for <span>teams</span></h2>
                    <p className={styles.upgrade}>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                    {items.map( (item, index) => (
                        <p className={styles.desc} key={index}>
                        <BsCheckCircle />
                        <span>{item.desc}</span>
                    </p>
                    ))}
                    <button className={clsx(styles.btn, "btnGreen")}>Explore Fiverr Business</button>
                </div>
                <div className={styles.col2}>
                    <img alt='' src={Business}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solutions