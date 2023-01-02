import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function TopNavComponent() {
  return (
    <>
      <div className="bg-blue lg:py-[13px] py-4 lg:px-[55px] md:h-[50px]">
        <nav>
          <div className="flex flex-wrap md:justify-between justify-center items-center pr-[13px]">
            <div className="flex  items-center">
              <Link href="#" className={`${styles.tNavLinks} text-[#fffffff2]`}>
                Frequently Asked Questions
              </Link>
            </div>
            <div className="md:flex gap-3">
              <div>
                <p className="text-white  text-[14px] leading-6">
                  <strong className="text-[#fffffff2]">Email:</strong>
                  <Link
                    href="mailto:info@nationwidesurveyors.org.uk"
                    className={`${styles.tNavLinks} pl-1`}
                  >
                    info@nationwidesurveyors.org.uk
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-white px-2 text-[14px] leading-6">
                  <strong className="text-[#fffffff2]">Call Us Free:</strong>
                  <Link
                    href="tel:0800 048 7474"
                    className={`${styles.tNavLinks} pl-1`}
                  >
                    0800 048 7474
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
