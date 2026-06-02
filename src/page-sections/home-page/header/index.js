import React from "react";
import Container from "@/components/container";
import HeaderContact from "./header-contact";

import style from "./header.module.scss";

const HeaderSection = () => {
  return (
    <>
      <section className={style.headerBg} id="home">
        <Container>
          <div data-aos="fade-up">
            <div className={style.end}>
              <h1 className={style.helveticaHeading}>CareGaply</h1>
              <h6 className={style.helveticaHeading}>We Close Care Gaps</h6>
            </div>
          </div>
        </Container>
      </section>
      <HeaderContact />
    </>
  );
};

export default HeaderSection;
