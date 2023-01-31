import React from 'react';
import s from "./CardJobBooked.module.scss";
import {FaAngleRight} from "react-icons/fa";

const CardJobBooked = () => {
  return (
    <div className={s.content}>
      <div className={s.service}>
        <h4>Buying services for work? <span>Help us tallor your experience to fit your needs.</span></h4>
        <div>
        <p>Tell us more about your business</p>
        <FaAngleRight />
        </div>
      </div>
      <div className={s.create}>
        <p>It seems that you don't have any active Gigs. Get selling!</p>
        <button className='btnGreen'>
          <a href='#home'>Create a New Gig</a> 
        </button>
      </div>
      <div className={s.cardjob}>
        <div className={s.col}>
          <img alt='' src='https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/79670756/original/0b171697a812cd934794e5635eb2535c789a1f57.jpg'/>
          <div className={s.jobItem}>
            <h4>Lập trình Front end với ReactJs</h4>
            <p>Greetings, I am Muhammad Zaeem I have a lot of experience in web development and SEO. I am here to deliver good quality services to my clients to satisfy them.</p>
            <div className={s.actions}>
              <div></div>
              <div className={s.detailAction}>
                <button>
                  <a href='#home'>View Detail</a>
                </button>
                <button>
                  <a href='#home'>Edit</a>
                </button>
                <button>
                  <a href='#home'>X</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardJobBooked