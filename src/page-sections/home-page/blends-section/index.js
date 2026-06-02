import React from "react";
import Image from "next/image";

import Container from "@/components/container";

import blend from "@/assets/blend.jpg";
import style from "./blend.module.scss";

const BlendSection = () => {
  return (
    <Container>
      <div className={style.main}>
        <h1 data-aos="fade-down-right">
          CareGaply blends proprietary technology with old-fashioned
          person-to-person care
        </h1>
        <div data-aos="zoom-in-up">

        <Image src={blend} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default BlendSection;
