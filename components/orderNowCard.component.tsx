import React from "react";
import ButtonComponent from "./button.component";

function OrderNowCard(props: any) {
  return (
    <div className="px-3">
      <div className="px-3 bg-dark-blue py-[30px] px-[35px]">
        <div className="text-center px-[15px] flex flex-col items-center justify-center">
          <h2 className="uppercase text-lime text-3xl font-semibold mb-4">
            Ready to place an order
          </h2>
          <p className="text-white text-[15px] mb-2.5">
            New orders can be placed anytime through our website with a smooth
            and quick online order form.
            <br /> Please click on ‘Order Now’ to place a new order.
          </p>
          <div className="">
            <ButtonComponent
              text="ORDER NOW"
              className="bg-lime text-sm font-semibold uppercase text-white px-[22px] py-[13px] hover:text-dark-blue ease-in duration-200 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderNowCard;
