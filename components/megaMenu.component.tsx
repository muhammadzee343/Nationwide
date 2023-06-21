import styles from "../styles/header.module.css";
import { megaMenu } from "../utility/constants";
import Link from "next/link";

export default function MegaMenu({ onLinkClick }: any) {
  return (
    <>
      <div className="w-11/12 block md:absolute inset-x-0 xl:top-[75px] md:top-[115px] md:z-[999] mx-auto pt-2 md:bg-lime rounded  animate-fade-in-up drop-shadow-md">
        <div
          id="mega-menu-full-dropdown"
          className="bg-white flex justify-center shadow-sm"
        >
          <div className="w-full bg-white grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4  gap-4 py-3">
            {megaMenu.map((ele: any, index) => {
              return (
                <div key={index} className="flex-col items-center px-4 py-5">
                  <a className="font-semibold uppercase text-dark-blue font-[15px]">
                    {ele.heading}
                  </a>
                  <ul className={styles.megaMenuList}>
                    {ele.links.map(({ title, link }: any, index: number) => {
                      return (
                        <li key={index}>
                          <Link
                            href={`/service${link}`}
                            onClick={() => onLinkClick(false)}
                          >
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
