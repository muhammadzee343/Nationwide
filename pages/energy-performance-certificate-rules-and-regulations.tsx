import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";

const EnergyPerformanceCertificate = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Energy Performance Certificate Rules And Regulations"
          breadcrumb="Energy Performance Certificate Rules And Regulations"
          className="bg-zinc-800 bg-blend-overlay bg-home_bg_image"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0">
          <p className={`font-normal ${styles.footerParagraph}`}>
            The Energy Performance Certificate (EPC) changes finally took effect
            on 1st October 2008, whereby the energy performance certificate
            rules which are relevant to domestic property owners, occupiers and
            agents, non-domestic property owners, managers and agents,
            prospective purchasers and tenants, and the building, heating and
            air-conditioning industries in England and Wales became law.
            <br />
            <br />
            The home EPC forms part of the Home Information Pack (HIP).
            Therefore, the EPCs in the HIP are now valid for a period of three
            years and not 12 months as it was previously.
          </p>
          <h1 className="text-[30px] font-semibold">
            The changes will make EPCs Mandatory for:
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            <b>Homes –</b> which include those domestic properties on the market
            before the phased introduction of EPCs began in 2007.
          </p>
          <p className={`${styles.footerParagraph}`}>
            <b>Commercial buildings– –</b> including the ones already placed on
            the market. If you sell or rent a property during the transition
            period, you are obliged to purchase an EPC as soon as is practically
            possible.
          </p>
          <p className={`${styles.footerParagraph}`}>
            <b>Public buildings’ –</b> Any property on or above a 1,000 square
            metres will be required to exhibit the energy certificates to
            include the air-conditioning systems.
          </p>
          <br />
          <h1 className="text-[30px] font-semibold">
            The disclosure of information from the EPC registers
          </h1>
          <br />
          <br />
          <p className={`font-normal ${styles.footerParagraph}`}>
            The EPC registers will be extended to allow access to the Energy
            Saving Trust, so that the Green Homes Service energy assessors will
            be permitted to access the names, addresses and energy ratings of a
            non-domestic building as to whether they have generated an EPC for
            that property.
          </p>

          <p className={`font-normal ${styles.footerParagraph}`}>
            The new rules will also unify and simplify the arrangements of
            gathered information for calculating as-built CO2 emission rates for
            an ‘On Construction’ build when giving a building control body the
            asset rating for a new building.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnergyPerformanceCertificate;
