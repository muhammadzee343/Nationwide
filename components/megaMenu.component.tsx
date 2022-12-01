import styles from "../styles/header.module.css";
import Link from "next/link";

export default function MegaMenu() {
  return (
    <>
      <div className="w-11/12 block xl:absolute inset-x-0 top-[75px] mx-auto pt-2 xl:bg-lime rounded  animate-fade-in-up drop-shadow-md">
        <div
          id="mega-menu-full-dropdown"
          className="bg-white flex justify-center shadow-sm"
        >
          <div className="w-full bg-white grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4  gap-4 py-3">
            <div className="flex-col items-center px-4 py-5">
              <a className="font-semibold uppercase text-dark-blue font-[15px]">
                Domestic & Commercial Certifications
              </a>
              <ul className={styles.megaMenuList}>
                <li>
                  <Link href="/service/domestic-epc">
                    Energy Performance Certificate
                  </Link>
                </li>
                <li>
                  <Link href="/service/commercial-epc">Commercial EPC</Link>
                </li>
                <li>
                  <Link href="/service/emergency-light-test-report">
                    Emergency Lights Test Report
                  </Link>
                </li>
                <li>
                  <Link href="/service/fire-alarm-test-report">
                    Fire Alarm Test Report
                  </Link>
                </li>
                <li>
                  <Link href="/service/fire-risk-assessment">
                    Fire Risk Assessment
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-col items-center px-4 py-5">
              <a className="font-semibold text-dark-blue uppercase font-[15px]">
                Gas Safety Certificate
              </a>
              <ul className={styles.megaMenuList}>
                <li>
                  <Link href="/service/gas-safety-certificate">
                    Gas Safety Certificate
                  </Link>
                </li>
                <li>
                  <Link href="/service/boiler-service">Boiler Service</Link>
                </li>
              </ul>
            </div>

            <div className="flex-col items-center px-4 py-5">
              <a className="font-semibold uppercase text-dark-blue font-[15px]">
                Electrical Reports & Remedial Work
              </a>
              <ul className={styles.megaMenuList}>
                <li>
                  <Link href="/service/electrical-installation-condition-report">
                    Electrical Installation Condition Report (EICR)
                  </Link>
                </li>
                <li>
                  <Link href="/service/electrical-portable-appliance-test">
                    Electrical Portable Appliance Test (PAT)
                  </Link>
                </li>
                <li>
                  <Link href="/service/eicr-remedial-work">
                    EICR Remedial Work
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-col items-center px-4 py-5">
              <a className="font-semibold uppercase text-dark-blue font-[15px]">
                Other Services
              </a>
              <ul className={styles.megaMenuList}>
                <li>
                  <Link href="/service/floor-plans">Floor Plans</Link>
                </li>
                <li>
                  <Link href="/service/building-surveys">Building Surveys</Link>
                </li>
                <li>
                  <Link href="/service/legionella-risk-assessment">
                    Legionella Risk Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/service/sap-assessments-2">SAP Assessments</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
