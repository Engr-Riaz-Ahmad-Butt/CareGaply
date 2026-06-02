import React from "react";
import Image from "next/image";

import Container from "@/components/container";

import care from "@/assets/personal-care.png";
import style from "./header.module.scss";
import Link from "next/link";
import Button from "@/components/button";

const HeaderContact = () => {
  return (
    <Container>
      <div className={style.headerContact} data-aos="fade-up-left">
        <Image src={care} alt="" />
        <p className={style.message}>Helen, I have your mammogram scheduled</p>
        <p className={style.para}>
          Our Personal Care Advocates move your patients to close gaps through
          proprietary tracking technology and old-fashioned person-to-person
          contact.
        </p>
        <Link href={"#contact-us"}>
          <Button title={"Contact us"} />
        </Link>
      </div>
    </Container>
  );
};

export default HeaderContact;
