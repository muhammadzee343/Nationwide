import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";
import Head from "next/head";

function BuldOrderDiscount() {
  return (
    <>
      <Head>
        <title>Energy Performance Certificate Rules And Regulations - Nationwide Surveyors</title>
      </Head>
    <div className="w-full bg-white flex justify-center">
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Placing Repeat Orders ? Why Not Join Our Commercial Service"
          breadcrumb="Placing Repeat Orders ? Why Not Join Our Commercial Service"
          className="bg-dark-blue"
        />
        <div className="flex flex-col pt-[65px] pb-[40px] px-3 xl:px-3 w-full lg:max-w-[970px] xl:max-w-[1170px]">
          <p className={`${styles.footerParagraph}`}>
            For those customers needing to make regular orders you can get
            direct access to our bespoke order management system for live
            updates.We offer a fully national service and can provide EPCs,
            Electrical Reports, Gas Safety Certificates plus many additional
            services.
          </p>
          <p className={`${styles.footerParagraph}`}>
            For commercial Enquiries Please Contact us at:
            admin@nationwidesurveyors.org.uk
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default BuldOrderDiscount;
