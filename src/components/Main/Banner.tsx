import React from "react";
import * as style from "./BannerStyle";
import Carousel from "react-bootstrap/Carousel";
import dummy from "../../data/main/Banner.json";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <style.MainBanner>
        <Carousel fade controls={false}>
          {dummy.map((item, index) => (
            <Carousel.Item interval={1500} key={index}>
              <Link to="#">
                <img src={item.image} alt="" />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </style.MainBanner>
    </>
  );
}

export default Banner;
