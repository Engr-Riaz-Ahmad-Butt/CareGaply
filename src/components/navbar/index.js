"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "../container";
import { usePathname, useRouter } from "next/navigation";

import logo from "@/assets/logo.png";
import style from "./navbar.module.scss";
import Button from "../button";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleScroll = () => {
    if (pathname === "/") {
      // already on Home → smooth scroll
      const section = document.getElementById("contact-us");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // from another page → go to Home with hash
      router.push("/#contact-us");
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <div className={style.navbar}>
        <Container>
          <div className={style.inner}>
            <Link href="/">
              <Image src={logo} alt="logo" className={style.img} />
            </Link>
            <div className={style.flex}>
              <Link href="/#home">
                <h6
                  style={{
                    marginLeft: "0px",
                    marginRight: "13px",
                  }}
                >
                  Home
                </h6>
              </Link>
              |
              <Link href="/#about-us">
                <h6>About Us</h6>
              </Link>
              |
              <Link href="/#our-services">
                <h6>Our Services</h6>
              </Link>
              |
              <Link href="/#contact-us">
                <h6>Contact us</h6>
              </Link>
              |
              <Link href="/blogs">
                <h6>Blogs</h6>
              </Link>
            </div>
            <div className={style.btnBtn}>
              <Button title={"Book an appointment"} onClick={handleScroll} />
            </div>

            <div
              className={`${style.hamburgen} ${open ? style.change : ""}`}
              onClick={() => setOpen(!open)}
            >
              <div className={style.bar1}></div>
              <div className={style.bar2}></div>
              <div className={style.bar3}></div>
            </div>
          </div>
        </Container>
      </div>
      <div className={`${style.sidebar} ${open ? style.open : ""}`}>
        <div className={style.flexSidebar}>
          <Link href="/#home" onClick={() => setOpen(false)}>
            <h6>Home</h6>
          </Link>

          <Link href="/#about-us" onClick={() => setOpen(false)}>
            <h6>About Us</h6>
          </Link>

          <Link href="/#our-services" onClick={() => setOpen(false)}>
            <h6>Our Services</h6>
          </Link>
          <Link href="/#contact-us" onClick={() => setOpen(false)}>
            <h6>Contact us</h6>
          </Link>
          <Link href="/blogs" onClick={() => setOpen(false)}>
            <h6>Blogs</h6>
          </Link>
        </div>
        <Button title={"Book an appointment"}  onClick={handleScroll}/>
      </div>
      {open && (
        <div className={style.backdrop} onClick={() => setOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;
