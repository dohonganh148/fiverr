import React from 'react';
import Header from "components/Header";
import Banner from "components/Banner";
import Trusted from "components/Trusted";
import PopularServices from "components/PopularServices"

const Home = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Trusted />
        <PopularServices />
    </div>
  )
}

export default Home