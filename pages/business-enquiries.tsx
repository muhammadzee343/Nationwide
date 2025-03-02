import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";
import Head from "next/head";
function BusinessEnquiries(props: any) {
  return (
    <div className="bg-white flex justify-center items-center">
      <Head>
        <title>Business Enquiries - Nationwide Surveyors</title>
      </Head>
      <div className=" w-full flex flex-col items-center">
        <HeaderComponent
            header="Business Enquiries"
            breadcrumb="Business Enquiries"
            className="bg-dark-blue"
        />
        <div className="flex flex-col pt-[65px] pb-[40px] px-3 xl:px-0 w-full lg:max-w-[970px] xl:max-w-[1170px]">
          <p className={`${styles.footerParagraph}`}>
            To discuss bulk order discounts, it is best to call our planning
            team on 0800 048 7474. Bulk order discounts are designed for clients
            who need to order in a large quantity and usually just a one off.
            For example, a landlord with 10 properties all needing EICRs would
            benefit from our bulk order pricing. If you are looking to order
            services consistently with us (such as letting agents/ property
            managers), then you may want to consider setting up a B2B account
            with us to access the best service and pricing tailored to your
            needs.
          </p>
          <p className={`${styles.footerParagraph}`}>
            For All business Enquiries, Please contact at:
            b2b@nationwidesurveyors.org.uk
          </p>
        </div>
      </div>
    </div>
  );
}

export default BusinessEnquiries;
