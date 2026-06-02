import React from "react";
import Image from "next/image";


import Container from "@/components/container";


import img1 from "@/assets/img1.png"
import img2 from "@/assets/img2.png"
import img3 from "@/assets/img3.png"
import img4 from "@/assets/img4.png"
import img5 from "@/assets/img5.png"
import img6 from "@/assets/img6.png"
import img7 from "@/assets/img7.png"
import img8 from "@/assets/img8.png"
import style from "./clear.module.scss"

const ClearAdvantage = () => {
  return (
    <section className={style.advantage}>
      <Container>
        <h1>The Clear Advantage</h1>
        <div className={style.body}>
          <div className={style.card}>
            <Image src={img1} alt="" />
            <p>
              Clear enrolls patients in RPM and CCM simultaneously. The
              combination gives your practice a better care and billing outcome.
              (We will enroll patients for RPM that don't qualify for CCM, but
              that is less than 5% of enrollments).
            </p>
          </div>
          <div className={`${style.card} `}>
            <Image src={img2} alt="" />
            <p>
              Our proprietary software auto assigns care management minutes to
              the optimal code before billing.
            </p>
          </div>
          <div className={style.card}>
            <Image src={img3} alt="" />
            <p>
            We auto-deliver diagnosis-specific questions to your patients for condition feedback.


            </p>
          </div>
          <div className={style.card}>
            <Image src={img4} alt="" />
            <p>
           Within our fee, we pay for and manage all devices during enrollment and ongoing (inventory management).


            </p>
          </div>
          <div className={style.card}>
            <Image src={img5} alt="" />
            <p>
            We have proprietary "CallerIQ" capability - this technology integrates your phone system with our software. Caller IQ auto detects calls from your staff to enrolled patients, then logs all minutes to the optimal CPT code(s).


            </p>
          </div>
          <div className={style.card}>
            <Image src={img6} alt="" />
            <p>
             Dedicated to your practice, our PHAs (Personal Health Advocates) follow a guideline of 18 Watchpoints on a daily/weekly basis for the purpose of 'leaving no stone unturned.'


            </p>
          </div>
          <div className={style.card}>
            <Image src={img7} alt="" />
            <p>
            We work within your practice's EMR to pass on patient messages and software-generated alerts - this minimizes disruption to your staff's current workflow.


            </p>
          </div>
          <div className={style.card}>
            <Image src={img8} alt="" />
            <p>
             Your clinical personnel get full access to our software for full transparency and real-time interactions.


            </p>
          </div>
       
        </div>
      </Container>
    </section>
  );
};

export default ClearAdvantage;
