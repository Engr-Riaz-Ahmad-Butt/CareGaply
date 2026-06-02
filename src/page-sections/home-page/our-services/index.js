import React from "react";
import Image from "next/image";

import Container from "@/components/container";

import arrow from "@/assets/svgs/arrow-service.svg";
import serviceImg from "@/assets/new-service.jpg";
import style from "./services.module.scss";

const OurServices = () => {
  return (
    <>
    <section id="our-services" className={style.services}>
      <Container>
        <div className={style.flex}>
          {cardsData?.map((ele, index) => (
            <div className={style.card} key={index} data-aos="zoom-in-up">
              <h1>{ele.heading}</h1>
              {ele?.body?.map((el, ind) => (
                <div className={style.inner} key={ind}>
                  <Image src={arrow} alt="" />
                  <p>{el}</p>
                </div>
              ))}
              <p className={style.announcement}>{ele?.para}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
    <div className={style.img} data-aos="fade-down">
      <Image src={serviceImg} alt=""/>
    </div>
    </>
  );
};

export default OurServices;


const cardsData=[
  {
    heading:"Free Your Staff",
    body:[
      "Our PCAs interact with your patients.",
      "We make appts with referred-to centers, pharmacies, & specialists.",
      "We update everything directly into your EMR, as you prefer it to be documented.",
      "We represent ourselves as someone form your practice.",
      "We make appointments for the patient with you directly into your EMR.",
    ],
    para:"YOUR STAFF CAN BE DOING OTHER IMPORTANT TASKS!"
  },
  {
    heading:"Appointments",
    body:[
      "Internal Appointments",
      "External Appointments",
      "Obtain Pre-authorizations",
      "Ensure Benefits",
      "Etc",
    ],
  },
  {
    heading:"Example Gaps",
    body:[
      "Daily Blood Pressure Readings",
      "HbA1c testing",
      "Mammogram",
      "Depression screening",
      "Shingles Vaccine",
      "Annual Wellness Visit",
      "Medication compliance",
    ],
    para:""
  },
]