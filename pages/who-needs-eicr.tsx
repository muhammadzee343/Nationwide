import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";

const WhoNeedsEicr = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Who Needs EICR"
          breadcrumb="Who Needs EICR"
          className="bg-dark-blue"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0">
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
