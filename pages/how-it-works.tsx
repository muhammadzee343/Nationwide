import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";

function HowItWorks() {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="How It Works"
          breadcrumb="How It Works"
          className="bg-zinc-800 bg-blend-overlay bg-home_bg_image"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0">
          <h1 className={`text-4xl ${styles.footerPagesHeading}`}>
            1. Place Order Online
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            Please select the services required and place order online 24/7. Our
            services can be ordered individually or as a combined Bundle
            Package. Prefer to place order over the phone? please call us FREE
            at 0800 048 7474.
          </p>
          <h1 className={`${styles.footerPagesHeading}`}>
            2. Assessment Survey Booked
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            Once you placed order online, our planning team will get in touch
            with you to arrange a suitable date and time to carry out the
            assessment survey for each service ordered, according to your
            suitability.
          </p>
          <h1 className={`${styles.footerPagesHeading}`}>
            3. Certificates Issued
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            Certificates will be issued digitally for each service ordered and
            sent to you by email, within 48 hours of Assessor’s visit. Being an
            online customer, you will also be able to download your certificates
            from your online account with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
