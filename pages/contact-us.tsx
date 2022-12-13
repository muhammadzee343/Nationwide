import React from "react";

function ContactUs(props: any) {
  return (
    <div className="flex justify-center">
      <div className="w-full xl:container">
        <div className="w-full flex pt-[82px]">
          <div className="w-6/12 flex flex-col">
            <div className="border-l-[8px] border-lime mb-[30px] px-5 py-2">
              <h4 className="text-sm mb-[2px] mt-[5px] uppercase font-semibold text-[#1a1a1a] tracking-[1px]">
                GET IN TOUCH
              </h4>
              <h2 className="text-[36px]  font-medium text-dark-blue font-semibold">
                For All Enquiries
              </h2>
            </div>
            <p></p>
          </div>
          <div className="w-6/12"></div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
