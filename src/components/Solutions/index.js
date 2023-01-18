import React from 'react';
import styles from "./Solutions.module.scss";
import { BsFillCaretRightFill } from "react-icons/bs";

const Solutions = () => {
  return (
    <div className={styles.solutions}>
        <div className='container'>
            <div className={styles.content}>
                <div className={styles.col1}>
                    <div>
                        <p><span>fiverr</span>business.</p>
                        <button>NEW</button>
                    </div>
                    <h2>A business solution designed for <span>teams</span></h2>
                    <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                    <p>
                        <BsFillCaretRightFill />
                        <span>Connect to freelancers with proven business experience</span>
                    </p>
                    <button>Explore Fiverr Business</button>
                </div>
                <div className={styles.col2}></div>
            </div>
        </div>
    </div>
  )
}

export default Solutions