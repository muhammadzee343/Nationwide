import React from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function TopNavComponent() {
  return (
    <>
      <div className="bg-blue lg:py-3 py-4 lg:px-11">
        <nav>
          <div className="flex flex-wrap md:justify-between justify-center px-4 text-center">
            <div className="flex mt-1">
              <Link href="#" className={styles.tNavLinks}>
                Frequently Asked Questions
              </Link>
            </div>
            <div className="md:flex">
              <div>
                <p className="text-white px-2 text-[14px] leading-6">
                  <strong>Email:</strong>
                  <Link
                    href="mailto:info@nationwidesurveyors.org.uk"
                    className={styles.tNavLinks}
                  >
                    info@nationwidesurveyors.org.uk
                  </Link>
                </p>
              </div>
              <div>
                <p className="text-white px-2 text-[14px] leading-6">
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
