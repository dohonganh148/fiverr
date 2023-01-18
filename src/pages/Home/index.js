import React from 'react';
import Header from "components/Header";
import Banner from "components/Banner";
import Trusted from "components/Trusted";
import PopularServices from "components/PopularServices";
import Benefits from "components/Benefits";
import Marketplace from "components/Marketplace";
import Solutions from "components/Solutions";

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Trusted />
        <PopularServices />
        <Benefits />
        <Marketplace />
        <Solutions />
    </div>
  )
}

export default Home