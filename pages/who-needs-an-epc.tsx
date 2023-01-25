import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";
import Head from "next/head";

const WhoNeedsAnEpc = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <Head>
        <title>Who Needs an EPC - Nationwide Surveyors</title>
      </Head>
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Who Needs An EPC"
          breadcrumb="Who Needs An EPC"
          className="bg-dark-blue"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0">
          <p className={`${styles.footerParagraph}`}>
            The Government is complying with the Energy Performance of Building
            Directive (EPBD) with the introduction of the Energy Performance
            Certificate. The EPC shows a record of the energy efficiency levels
            and CO2 emissions of a building, by using a standard table from A to
            G (A being very efficient, G being very inefficient).
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoNeedsAnEpc;
