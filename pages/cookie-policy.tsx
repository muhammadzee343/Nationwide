import React from "react";
import HeaderComponent from "../components/Header.component";

function CookiePolicy() {
  const cookielistPoints = [
    {
      point:
        "Strictly necessary cookies. These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.",
    },
    {
      point:
        "Analytical/performance cookies. They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.",
    },
    {
      point:
        "Functionality cookies. These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).",
    },
    {
      point:
        "Targeting cookies. These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.",
    },
  ];
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-full flex flex-col items-center">
        <HeaderComponent
          header="Cookie Policy"
          breadcrumb=" Cookie Policy"
          className="bg-zinc-800 bg-blend-overlay bg-home_bg_image"
        />
        <div className="w-full flex flex-col xl:max-w-[1114px] pt-[60px] pb-[40px] px-3 xl:px-0 font-opensans">
          <p className="footer-paragraph">
            Our website uses cookies to distinguish you from other users of our
            website. This helps us to provide you with a good experience when
            you browse our website and also allows us to improve our site. By
            continuing to browse the site, you are agreeing to our use of
            cookies. A cookie is a small file of letters and numbers that we
            store on your browser or the hard drive of your computer if you
            agree. Cookies contain information that is transferred to your
            computer’s hard drive.
          </p>
          <p className="footer-paragraph">We use the following cookies:</p>
          <ul className="list-disc list-inside bg-blue-400 footer-paragraph font-opensans">
            {cookielistPoints.map((item, index) => {
                return(
                    <li className="ml-4" key={index}>{item.point}</li>
                )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CookiePolicy;
