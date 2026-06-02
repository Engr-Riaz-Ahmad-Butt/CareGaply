import React from "react";
import Image from "next/image";

import Container from "@/components/container";

import care from "@/assets/care.png";
import style from "./personal.module.scss";

const PersonalCare = () => {
  return (
    <section className={style.personal}>
      <Container>
        <div className={style.flex}>
          <div className={style.leftFlex}>
            <p
              style={{
                marginBottom: "15px",
              }}
            >
              We assign a dedicated Personal Care Advocate (PCA) to your
              practice.
            </p>
            <p>Your patients will know their PCA.</p>
            <p>Your staff will know your PCA.</p>
          </div>
          <div className={style.rightFlex}>
            <Image src={care} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PersonalCare;
