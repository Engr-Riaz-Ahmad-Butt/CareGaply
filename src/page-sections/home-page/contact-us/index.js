"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Container from "@/components/container";
import Textfield from "@/components/textfield";
import Textarea from "@/components/textarea";
import Button from "@/components/button";
import email from "@/assets/svgs/email.svg";
import phone from "@/assets/svgs/phone.svg";
import instagram from "@/assets/svgs/instagram.svg";
import fb from "@/assets/svgs/fb.svg";
import style from "./contact.module.scss";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

 
const handleChange = React.useCallback((e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
}, []);
  useEffect(() => {
    if (status.type === "success") {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000); // 5 seconds

      // Cleanup function to clear the timeout if component unmounts or status changes
      return () => clearTimeout(timer);
    }
  }, [status]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className={style.contact}>
      <Container>
        <div className={style.grid}>
         <div className={style.left} data-aos="fade-up-left">
  <div className={style.bg}>
    <div>
      <p className={style.para}>
        CareGaply adds reimbursement to your bottom line by improving
        you value-based contract(s) reimbursement.
      </p>
    </div>
    
    <div className={style.contactInfoWrapper}>
      <h1>Contact Info</h1>
<div className={style.contactInfo1}>
      <div className={style.flex}>
        <div className={style.img}>
          <Image src={phone} alt="" />
        </div>
        <div style={{ flex: 1 }}>
          <h6>Phone Number</h6>
          <p>615-390-9065</p>
        </div>
      </div>
      <div className={style.flex}>
        <div className={style.img}>
          <Image src={email} alt="" />
        </div>
        <div style={{ flex: 1 }}>
          <h6>Email</h6>
          <p>support@caregaply.com</p>
        </div>
      </div>
      <div className={style.flex}>
        <div className={style.img}>
          <Image src={fb} alt="" />
        </div>
        <div className={style.img}>
          <Image src={instagram} alt="" />
        </div>
</div>
      </div>
    </div>
  </div>
</div>
          <div className={style.right} data-aos="fade-up-right">
            <h1>Feel Free To Message Us</h1>
            <form className={style.body} onSubmit={handleSubmit}>
              <div className={style.innerGrid}>
                <Textfield
                  placeholder={"First Name"}
                  name="firstName"
                  type={"text"}
                  value={formData.firstName}
                  onChange={(e) => handleChange(e)}
                  required
                />
                <Textfield
                  placeholder={"Last Name"}
                  type={"text"}
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className={style.contactWrapper}>
                <Textfield
                  placeholder={"Email"}
                  name="email"
                  type={"email"}
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className={style.contactWrapper}>
                <Textfield
                  placeholder={"Phone Number"}
                  name="phone"
                  type={"tel"}
                  value={formData.phone}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className={style.contactWrapper}>
                <Textarea
                name="message"
                  placeholder={"Message"}
                  value={formData.message}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
             {status.message && (
            <div className={`${style.statusMessage} ${style[status.type]}`}>
            {status.message}
             </div>
)}
              <Button
                title={loading ? "Sending..." : "Book an Appointment"}
                type="submit"
                disabled={loading}
              />
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
