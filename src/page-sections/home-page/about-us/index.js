import React from "react";
import Image from "next/image";

import Container from "@/components/container";

import img from "@/assets/about-1.jpg";
import img1 from "@/assets/about-2.jpg";
import style from "./about.module.scss";

const AboutUs = () => {
  return (
    <section id="about-us" className={style.bg}>
      <Container>
        <div className={style.about}>
          <div className={style.right} data-aos="fade-left">
            <h1>What is CareGaply?</h1>
            <p>
              CareGaply adds reimbursement to your bottom line by improving
              your Value-Based contract(s) reimbursement. We do this through
              assigning your practice a dedicated, phone-based Personal Care
              Advocate. This PCA is tasked with closing care gaps for your
              patients, which contribute to improved reimbursement.
            </p>

            <h1>Nudge by Nudge</h1>
            <p>
              {" "}
              Our PCAs move your patients to close gaps through proprietary
              tracking technology and old-fashioned person-to-person contact.
              Nudge by nudge our PCAs accomplish important milestones for you
              and your patients.
            </p>
          </div>
          <div className={style.left}>
            <div className={style.left}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Image src={img} alt="" className={style.img} />
            </div>
            <div
              className={style.absolute}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Image src={img1} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
