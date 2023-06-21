import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";
import { infolistPoints } from "../utility/constants";
import Head from "next/head";

function PrivacyPolicy() {
  return (
    <div className="w-full bg-white flex justify-center">
      <Head>
        <title>Nationwide Surveyors - Privacy Policy</title>
        <meta
            name="description"
            content="At Nationwide Surveyors, we are committed to preserving the privacy of all visitors to this website. This policy applies to personal information we hold about individuals, sole traders and partnerships."
        />
      </Head>
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Privacy Policy"
          breadcrumb="Privacy Policy"
          className="bg-[#182333/0.85] bg-privacy_policy_image bg-auto bg-repeat bg-scroll privacy-image-bg"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[60px] pb-[40px] px-3 xl:px-0">
          <p className={`${styles.footerParagraph}`}>
            At Nationwide Surveyors, we are committed to preserving the privacy
            of all visitors to this website. This policy applies to personal
            information we hold about individuals, sole traders and
            partnerships. It also applies to information we hold about companies
            and other organisations. By browsing, registering or inquiring on
            this site, you consent to the collection, use and transfer of your
            information under the terms of this policy. When we first obtain
            personal information from you, or when you take a new service or
            product from us, we will give you the opportunity to tell us if you
            do or do not want to receive information from us about other
            services or products. You can normally do this by ticking a box on
            an application form or contract. You may change your mind at any
            time by emailing us at the address below.
          </p>
          <h1>
            <b>Collecting Information</b>
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            When you visit, register or inquire on this website you may be asked
            to provide certain information about yourself including your name
            and contact details. We may also collect information about the
            following: – Your usage of our website as well as information about
            you from any messages you post to the website and/or e-mails.
          </p>
          <p className={`${styles.footerParagraph}`}>
            Information about your visit, including but not limited to: your IP
            Address, operating system, browser version, geographical location,
            length of your visit and pages visited. This information is held on
            our server logs and is used for generating anonymous statistics to
            help us improve our service to you. We reserve the right to use this
            information to investigate and take action against any misuse of the
            site.
          </p>
          <h1>
            <b>Information Use</b>
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            Information you provide or we hold about you may be used by us to:
          </p>
          <ul
            className={`list-disc list-inside bg-blue-400 ${styles.footerParagraph}`}
          >
            {infolistPoints.map((item, index) => {
              return (
                <div className="flex flex-row" key={index}>
                  <li className="text-justify ml-3"></li>
                  <p>{item.point}</p>
                </div>
              );
            })}
          </ul>
          <h1>
            <b>Information Disclosure</b>
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            Nationwide Surveyors do not sell trade or rent your information and
            will never disclose information about you to third parties, except
            to fulfil your specific order for a product or information.
          </p>
          <p className={`${styles.footerParagraph}`}>
            We may of course be obliged at law to pass on your information to
            the Police or any other statutory authority.
          </p>
          <h1>
            <b>Security and Data Retention</b>
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            We employ security measures to protect your personal information
            from access by unauthorised persons and against unlawful processing,
            accidental loss, destruction and damage. We will retain your
            information for a reasonable period or as long as the law requires.
          </p>
          <h1>
            <b>Links</b>
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            This website may contain links to other sites or recommended
            suppliers. Please remember that we are not responsible for the
            privacy practices of these other sites. This privacy policy applies
            only to information collected on this website.
          </p>
          <h1>
            <b>Accessing and Updating</b>
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            You are entitled to see the information held about you and you may
            ask us to make any necessary changes or to remove your details form
            our records.
          </p>
          <h1>
            <b>Further Information</b>
          </h1>
          <br />
          <p className={`${styles.footerParagraph}`}>
            We may amend this policy from time to time, in which case we will
            publish the amended version on our website. If you have any
            questions or comments about our Privacy Policy, please contact us at
            info@nationwidesurveyors.org.uk
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
