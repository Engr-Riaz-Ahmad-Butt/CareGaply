import React from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "../container";

import logo from "@/assets/logo-white.png";
import email from "@/assets/svgs/email.svg";
import phone from "@/assets/svgs/phone.svg";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Container>
        <div className={style.footerInner}>
          <div className={style.left}>
            <Image src={logo} alt="CareGaply logo" />
            <p className={style.p}>
              Improve your quality and performance measures, such as HEDIS,
              ACO, MAP, APP, MIPS, etc.
            </p>
          </div>
          <div className={style.right}>
            <div>
              <h5>Quick Links</h5>
              <Link href="/">
                <p>Home</p>
              </Link>
              <Link href="/#about-us">
                <p>About Us</p>
              </Link>
              <Link href="/#our-services">
                <p>Services</p>
              </Link>
              <Link href="/#contact-us">
                <p>Contact Us</p>
              </Link>
              <Link href="/blogs">
                <p>Blogs</p>
              </Link>
            </div>

            <div
              style={{
                maxWidth: "270px",
                width: "100%",
              }}
            >
              <h5>Contact</h5>
              <p>
                <Image src={email} alt="" />
                support@caregaply.com
              </p>
              <p>
                <Image src={phone} alt="" />
                615-390-9065
              </p>
            </div>
          </div>
        </div>
        <div className={style.footerBottom}>
          <p>Copyright 2026 CareGaply</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
