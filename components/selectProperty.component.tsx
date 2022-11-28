import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faHouse } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "./Button.component";

export default function SelectProperty() {
  return (
    <>
      <div className=" bg-white text-center z-[250]" id="main_quote_form">
        <form id="instantquote_main" method="post">
          <h3 className="text-white font-bold uppercase text-[26px]  mx-25  bg-dark-blue py-[20px] px-[25px] block">
            Get Instant <span className="text-lime block font-bold">Quote</span>
          </h3>
          <div className="border border:grey-600 bg-white mb-[25px] mt-0 py-[20px] px-[25px] h-[291px] text-center ">
            <div className="text-left relative" id="default_screen">
              <h6 className="text-dark-blue block font-bold text-base my-[12px]">
                Select Your Property Type
              </h6>
              <div className="justify-center h-[158px] flex-col">
                <div className="cat_box">
                  <label
                    className=" relative flex items-center border-2 border-lime py-[16px] px-[5px]
                   pl-[55px] font-[15px] font-bold text-dark-blue cursor-pointer mb-[15px]
                   hover:bg-lime"
                  >
                    <FontAwesomeIcon
                      className="w-8 ,w-3 text-dark-blue absolute left-[14px]"
                      icon={faHouse}
                    />
                    Residential
                    <input
                      type="radio"
                      name="product_type"
                      value="domestic"
                      className="hidden"
                    />
                    Property
                  </label>

                  <label
                    className="relative flex items-center border-2 border-lime py-[16px] px-[5px]
                   pl-[55px] font-[15px] font-bold text-dark-blue cursor-pointer mb-[15px] hover:bg-lime"
                  >
                    <FontAwesomeIcon
                      className="w-[26px] ,w-3 text-dark-blue  absolute left-[14px]"
                      icon={faBuilding}
                    />
                    Commercial Property
                    <input
                      type="radio"
                      name="product_type"
                      className="hidden"
                      value="commercial"
                    />
                  </label>
                </div>
              </div>
              <ButtonComponent
                text="Quote Now"
                className="bg-lime text-dark-blue font-semibold  px-[20px] py-[13px] hover:bg-dark-blue hover:text-white ease-in duration-200"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
