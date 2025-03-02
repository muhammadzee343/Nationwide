import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";
import Head from "next/head";

const WhoNeedsEicr = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <Head>
        <title>Who needs EICR - Nationwide Surveyors</title>
      </Head>
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Who Needs EICR"
          breadcrumb="Who Needs EICR"
          className="bg-dark-blue"
        />
        <div className="flex flex-col pt-[65px] pb-[40px] px-3 xl:px-0 w-full lg:max-w-[970px] xl:max-w-[1170px]">
          <h1 className={`${styles.footerPagesHeading}`}>
            Electrical Installation Condition Report (EICR)
          </h1>
          <br />
          <p className={`font-normal pb-4 ${styles.footerParagraph}`}>
            whether it’s your home, a business or a property you rent out, your
            electrical installation should always be covered by an in date
            Electrical Condition Report. Although it’s not a legal requirement
            to have an Electrical Condition Report many legal documents refer to
            an Electrical Condition Report as a way of satisfying their
            requirements- The Electricity at Work Act as one example.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoNeedsEicr;
