import React from 'react';
import Banner from "components/Banner";
import Trusted from "components/Trusted";
import PopularServices from "components/PopularServices";
import Benefits from "components/Benefits";
import Marketplace from "components/Marketplace";
import Solutions from "components/Solutions";
import Feedback from "components/Feedback";

const Home = () => {
  return (
    <div>
        <Banner />
        <Trusted />
        <PopularServices />
        <Benefits />
        <Marketplace />
        <Solutions />
        <Feedback />
    </div>
  )
}

export default Home