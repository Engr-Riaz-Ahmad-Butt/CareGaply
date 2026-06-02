import React from "react";
import Image from "next/image";

import Container from "@/components/container";

import care from "@/assets/personal-care.png";
import style from "./header.module.scss";
import Link from "next/link";
import Button from "@/components/button";

const carePoints = [
  "Appointment scheduling for overdue screenings",
  "Referral and specialist follow-up",
  "Benefits and prior authorization support",
  "Clinic-ready EMR documentation",
];

const HeaderContact = () => {
  return (
    <section className={style.headerContact}>
      <Container>
        <div className={style.contactGrid} data-aos="fade-up-left">
          <div className={style.contactMedia}>
            <Image src={care} alt="CareGaply advocate scheduling patient care" />
            <div className={style.message}>
              <span>Patient update</span>
              <p>Helen, I have your mammogram scheduled.</p>
            </div>
          </div>

          <div className={style.contactCopy}>
            <p className={style.kicker}>Human follow-through</p>
            <h2>Personal Care Advocates who move every gap to done.</h2>
            <p className={style.para}>
              CareGaply gives your practice a dedicated outreach team backed by
              gap-tracking technology. We contact patients, coordinate the next
              step, and keep your staff focused on higher-value work.
            </p>

            <div className={style.careList}>
              {carePoints.map((point) => (
                <div className={style.careItem} key={point}>
                  <span></span>
                  <p>{point}</p>
                </div>
              ))}
            </div>

            <div className={style.contactActions}>
              <Link href={"#contact-us"}>
                <Button title={"Contact us"} />
              </Link>
              <p>Designed for independent practices and value-based teams.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeaderContact;
