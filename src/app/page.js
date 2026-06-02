import React from "react";

import Layout from "@/components/layout";
import HeaderSection from "@/page-sections/home-page/header";
import AboutUs from "@/page-sections/home-page/about-us";
import BlendSection from "@/page-sections/home-page/blends-section";
import OurServices from "@/page-sections/home-page/our-services";
import FirstStep from "@/page-sections/home-page/first-step";
import ContactUs from "@/page-sections/home-page/contact-us";

const Home = () => {
  return (
    <>
      <Layout>
        <HeaderSection />
        <AboutUs />
        <BlendSection />
        <OurServices />
        <FirstStep/>
        <ContactUs/>
      </Layout>
    </>
  );
};

export default Home;
