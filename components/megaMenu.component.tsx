import styles from "../styles/header.module.css";

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
                <li>Energy Performance Certificate</li>
                <li>Commercial EPC</li>
                <li>Emergency Lights Test Report</li>
                <li>Fire Alarm Test Report</li>
                <li>Fire Risk Assessment</li>
              </ul>
            </div>

            <div className="flex-col items-center px-4 py-5">
              <a className="font-semibold text-dark-blue uppercase font-[15px]">
                Gas Safety Certificate
              </a>
              <ul className={styles.megaMenuList}>
                <li>Gas Safety Certificate</li>
                <li>Boiler Service</li>
              </ul>
            </div>

            <div className="flex-col items-center px-4 py-5">
              <a className="font-semibold uppercase text-dark-blue font-[15px]">
                Electrical Reports & Remedial Work
              </a>
              <ul className={styles.megaMenuList}>
                <li>Electrical Installation Condition Report (EICR)</li>
                <li>Electrical Portable Appliance Test (PAT)</li>
                <li>Electrical Portable Appliance Test (PAT)</li>
              </ul>
            </div>

            <div className="flex-col items-center px-4 py-5">
              <a className="font-semibold uppercase text-dark-blue font-[15px]">
                Other Services
              </a>
              <ul className={styles.megaMenuList}>
                <li>Floor Plans</li>
                <li>Building Surveys</li>
                <li>Legionella Risk Assessment</li>
                <li>SAP Assessments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
