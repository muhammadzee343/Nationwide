import React from "react";
import HeaderComponent from "../components/Header.component";

function PrivacyPolicy() {
  const infolistPoints = [
    {
      point: "Identify you when you contact us.",
    },
    {
      point: "Enable us to contact you.",
    },
    {
      point:
        "Help contact you regarding your order/enquiry (we may contact you by telephone or e-mail if you have given us these contact details).",
    },
    {
      point: "Help to prevent and detect fraud or loss; and",
    },
  ];
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Privacy Policy"
          breadcrumb="Privacy Policy"
          className="bg-zinc-800 bg-blend-overlay bg-home_bg_image"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[60px] pb-[40px] px-3 xl:px-0 font-opensans">
          <p className="footer-paragraph">
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
          <p className="footer-paragraph">
            When you visit, register or inquire on this website you may be asked
            to provide certain information about yourself including your name
            and contact details. We may also collect information about the
            following: – Your usage of our website as well as information about
            you from any messages you post to the website and/or e-mails.
          </p>
          <p className="footer-paragraph">
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
          <p className="footer-paragraph">
            Information you provide or we hold about you may be used by us to:
          </p>
          <ul className="list-disc list-inside bg-blue-400 footer-paragraph font-opensans">
            {infolistPoints.map((item, index) => {
              return (
                <li className="ml-4" key={index}>
                  {item.point}
                </li>
              );
            })}
          </ul>
          <h1>
            <b>Information Disclosure</b>
          </h1>
          <br />
          <p className="footer-paragraph">
            Nationwide Surveyors do not sell trade or rent your information and
            will never disclose information about you to third parties, except
            to fulfil your specific order for a product or information.
          </p>
          <p className="footer-paragraph">
            We may of course be obliged at law to pass on your information to
            the Police or any other statutory authority.
          </p>
          <h1>
            <b>Security and Data Retention</b>
          </h1>
          <br />
          <p className="footer-paragraph">
            We employ security measures to protect your personal information
            from access by unauthorised persons and against unlawful processing,
            accidental loss, destruction and damage. We will retain your
            information for a reasonable period or as long as the law requires.
          </p>
          <h1>
            <b>Links</b>
          </h1>
          <br />
          <p className="footer-paragraph">
            This website may contain links to other sites or recommended
            suppliers. Please remember that we are not responsible for the
            privacy practices of these other sites. This privacy policy applies
            only to information collected on this website.
          </p>
          <h1>
            <b>Accessing and Updating</b>
          </h1>
          <br />
          <p className="footer-paragraph">
            You are entitled to see the information held about you and you may
            ask us to make any necessary changes or to remove your details form
            our records.
          </p>
          <h1>
            <b>Further Information</b>
          </h1>
          <br />
          <p className="footer-paragraph">
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
