import React from "react";
import styles from "../styles/footer.module.css";
import HeaderComponent from "../components/header.component";
import { cookielistPoints } from "../utility/constants";
import Head from "next/head";
function CookiePolicy() {
  return (
    <div className="w-full bg-white flex justify-center">
      <Head>
        <title>Cookie Policy - Nationwide Surveyors</title>
      </Head>
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Cookie Policy"
          breadcrumb=" Cookie Policy"
          className="bg-zinc-800 bg-blend-overlay bg-home_bg_image"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[60px] pb-[40px] px-3 xl:px-0">
          <p className={`${styles.footerParagraph}`}>
            Our website uses cookies to distinguish you from other users of our
            website. This helps us to provide you with a good experience when
            you browse our website and also allows us to improve our site. By
            continuing to browse the site, you are agreeing to our use of
            cookies. A cookie is a small file of letters and numbers that we
            store on your browser or the hard drive of your computer if you
            agree. Cookies contain information that is transferred to your
            computer’s hard drive.
          </p>
          <p className={`${styles.footerParagraph}`}>
            We use the following cookies:
          </p>
          <ul
            className={`list-disc list-inside bg-blue-400 ${styles.footerParagraph}`}
          >
            {cookielistPoints.map((item, index) => {
              return (
                <div className="flex flex-row ml-2" key={index}>
                  <li className="text-justify"></li>
                  <p>{item.point}</p>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
