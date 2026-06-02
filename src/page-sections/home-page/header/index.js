import React from "react";
import Link from "next/link";
import Container from "@/components/container";
import HeaderContact from "./header-contact";

import style from "./header.module.scss";

const heroStats = [
  {
    value: "01",
    label: "Find every open gap",
  },
  {
    value: "02",
    label: "Reach patients personally",
  },
  {
    value: "03",
    label: "Document the closure",
  },
];

const HeaderSection = () => {
  return (
    <>
      <section className={style.headerBg} id="home">
        <Container>
          <div className={style.heroGrid} data-aos="fade-up">
            <div className={style.copy}>
              <p className={style.eyebrow}>AI-powered care gap closure</p>
              <h1>
                Care gaps closed by real advocates, not just another dashboard.
              </h1>
              <p className={style.subText}>
                CareGaply combines proprietary tracking with personal patient
                outreach so practices can complete screenings, referrals,
                benefits checks, and follow-ups without overloading staff.
              </p>
              <div className={style.actions}>
                <Link href="#contact-us" className={style.primaryAction}>
                  Book a consultation
                </Link>
                <Link href="#our-services" className={style.secondaryAction}>
                  See services
                </Link>
              </div>
              <div className={style.stats}>
                {heroStats.map((item) => (
                  <div className={style.stat} key={item.value}>
                    <span>{item.value}</span>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={style.workflowCard} aria-label="CareGaply workflow">
              <div className={style.cardHeader}>
                <span></span>
                <p>Today&apos;s care gap workflow</p>
              </div>
              <div className={style.patientRow}>
                <div>
                  <strong>Helen M.</strong>
                  <p>Mammogram overdue</p>
                </div>
                <span>In progress</span>
              </div>
              <ul>
                <li>Patient contacted by PCA</li>
                <li>Appointment scheduled</li>
                <li>EMR update prepared</li>
              </ul>
              <div className={style.cardMetric}>
                <strong>7</strong>
                <p>gaps ready to close this week</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <HeaderContact />
    </>
  );
};

export default HeaderSection;
