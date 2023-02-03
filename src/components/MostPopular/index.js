import React from 'react';
import s from "./MostPopular.module.scss";
import {BsArrowRightShort} from "react-icons/bs";
import Slider from "react-slick";

const MostPopular = ({name}) => {
    const items = [
        {
            img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png",
            text: "Minimalist Logo Design",
        },
        {
            img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png",
            text: "Architecture & Interior Design",
        },
        {
            img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/55b9d6349057bb9fe177ea57e2d92f30-1670570507381/Web%20Design.png",
            text: "Website Design",
        },
        {
            img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png",
            text: "Illustration",
        },
        {
            img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png",
            text: "Image Editing",
        },
        {
            img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png",
            text: "T-Shirts & Merchandise",
        },
        {
            img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/5987755afeb2d9ea01871fdee90a9a05-1670570470543/Product%20_%20industrial%20design.png",
            text: "Industrial & Product Design",
        },
        {
            img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101621/Social%20Media%20Design_2x.png",
            text: "Social Media Design",
        },
        {
            img: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png",
            text: "NFT Art",
        },
    ]

    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
      }
      function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return <div className={className} onClick={onClick} />;
      }
    const settings = {
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
  return (
    <div className={s.content}>
        <h4>Most popular in {name}</h4>
        <div className={s.slideList}>
            <Slider {...settings}>
            {items.map( (item, index) => (
                <div key={index} className={s.slide}>
                <a href='#home' className={s.item}>
                    <img alt='' src={item.img}/>
                    <span>{item.text} <BsArrowRightShort /></span>
                </a>
            </div>
            ))}
            </Slider>
            
        </div>
    </div>
  )
}

export default MostPopular