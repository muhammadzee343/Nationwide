import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/header.module.css";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function TopNavComponent() {
  return (
    <>
      <div className="bg-blue lg:py-3 py-8 lg:px-16">
        <nav>
          <div className="flex flex-wrap md:justify-between justify-center px-4 text-center">
            <div className="flex mt-1">
              <Link href="#" className={styles.tNavLinks}>
                Frequently Asked Questions
              </Link>
            </div>
            <div className="md:flex">
              <div>
                <p className="text-white px-2 text-[14px] leading-7">
                  <span className="flex sm:inline-block justify-center">
                    <FontAwesomeIcon
                      className="w-4 h-5 mr-2 inline mt-1 sm:mt-0"
                      icon={faEnvelope}
                    />
                    <strong>Email:</strong>
                  </span>
                  <Link
                    href="mailto:info@nationwidesurveyors.org.uk"
                    className={styles.tNavLinks}
                  >
                    info@nationwidesurveyors.org.uk
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-white px-2 text-[14px] leading-7">
                  <FontAwesomeIcon
                    className="w-3 h-4 mr-2 inline"
                    icon={faPhone}
                  />
                  <strong>Call us Free:</strong>
                  <Link href="tel:0800 048 7474" className={styles.tNavLinks}>
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
