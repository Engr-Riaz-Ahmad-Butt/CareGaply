"use client";

import React from "react";

import Container from "@/components/container";
import Button from "@/components/button";

import style from "./step.module.scss";

const FirstStep = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className={style.headerBg}>
        <Container>
          <div className={style.inner} data-aos="fade-down">
            <p>
              Are you participating in any value-based or incentive-based
              contracts? You should be!
            </p>
            <p style={{
              marginBottom:'40px'
            }}>
              Rely on CareGaply as an effortless bridge into superior
              value-based performance.
            </p>

            <Button title={"Book An Appointment"} onClick={scrollToContact} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default FirstStep;
