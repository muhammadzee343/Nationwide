import React from "react";
import styles from "../styles/ourServices.module.css";
import { ourServices } from "../utility/constants";
import OurServicesComponent from "../components/ourServices.component";

function OurServices(props: any) {
  return (
    <div className="flex flex-col  items-center justify-center ">
      <div className="text-center pt-[65px] mb-40px">
        <h1 className={`${styles.ourServicesHeading}`}> Our Services</h1>
      </div>
      <div className="text-center mt-[40px] mb-[20px] w-8/12 sm:w-3/5 lg:px-[60px]">
        <p className={`${styles.ourServiceParagraph}`}>
          We provide a wide range of domestic and commercial services to Private
          Landlords, Homeowners, Buyers, Sellers, Property Managers, Housing
          Associations and many more.
        </p>
        <p className={`${styles.ourServiceParagraph}`}>
          Our online ordering system allows you to add multiple properties with
          a variety of services, in just a single order.
        </p>
      </div>
      <div className="flex flex-wrap justify-center sm:gap-8 mb-10">
        {ourServices.map(({ list, title }, index) => {
          return <OurServicesComponent key={index} list={list} title={title} />;
        })}
      </div>
    </div>
  );
}

export default OurServices;
