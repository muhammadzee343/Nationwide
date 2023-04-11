import React, {useMemo} from "react";
import Head from "next/head";
import ButtonComponent from "../components/button.component";
import {attributes, paymentTypes} from "../utility/orderNowConstants";
import {useRouter} from "next/router";
import moment from "moment"

const productData = [
    {
        serviceName: "Electrical Installation Condition Report (EICR)",
        posttitle: "Postcode:",
        postvalue: "LE12AB",
        addressTitle: "Address:",
        addressValue: "134 Wharf Street North, Leicester, Leicestershire, LE12AB",
        propTypeTitle: "Property Type:",
        propTypeValue: "End Terraced / Semi House",
        bedroomsTitle: "Number of Bedrooms:",
        bedroomsvalue: "0",
        consumerUnitTitle: "Number of Consumer Units:",
        consumetUnitvalue: "1",
        elecApplienceTitle: "Number of Electric Appliances:",
        elecAppliencevalue: "1-10",
        total: "$129.00"
    },
]

const OrderReceived: React.FunctionComponent = ({ orderInfo }) => {
    const router = useRouter();

    const orderData = [
        {
            title: "ORDER NUMBER:",
            value: orderInfo.order_id
        },
        {
            title: "DATE:",
            value: moment(orderInfo.payment_date).format('MMMM D, YYYY')
        },
        {
            title: "TOTAL:",
            value: `$${orderInfo.total_amount}`
        },
        {
            title: "PAYMENT METHOD:",
            value: paymentTypes[orderInfo.payment_method]
        },
    ]

    const priceData = [
      {
        title: "SUBTOTAL",
        value: `$${parseInt(orderInfo.total_amount) + parseInt(orderInfo.total_discount) }`,
      },
    ];

    if(orderInfo.total_discount !="0.0"){
        priceData.push({
          title: "DISCOUNT",
          value: `-${orderInfo.total_discount}`,
        });
    }


    priceData.push(
        {
            title: "PAYMENT METHOD",
            value:  paymentTypes[orderInfo.payment_method],
        },
        {
            title: "TOTAL",
            value: `$${orderInfo.total_amount}`,
        })

  const orderDetail = useMemo<JSX.Element[]>(() => {
    const element: JSX.Element[] = [];
    orderData.forEach((data) => {
      element.push(
        <div className="flex flex-row mr-10 pt-5 pb-5 md:p-5">
          <div className="md:border-r border-gray-500 border-dotted md:pr-10">
            <p className="text-xs">{data.title}</p>
            <p className="font-bold">{data.title !== "TOTAL:" ? data.value : "£" + parseFloat(data.value.replace("$", "")).toFixed(2)}</p>
          </div>
        </div>
      );
    });
    return element;
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Head>
        <title>Checkout - Nationwide Surveyors</title>
      </Head>
      <div className="w-full flex flex-wrap justify-center items-start sm:gap-x-22 mt-14 mb-14">
        <div className="w-full lg:w-[90%] flex flex-col justify-center pt-[35px] pb-[10px] px-2">
          <div className="w-3/4 md:w-1/4">
            <ButtonComponent
                onClick={() =>{
                    router?.push({
                        pathname: "/",
                    });
                }}
              text="RETURN TO HOME PAGE"
              className="bg-dark-blue text-white md:text-[18px] font-semibold px-[20px] py-[10px]
                            hover:bg-lime hover:text-white ease-in duration-200"
                        />
                    </div>
                    <p className="mt-6 text-lg">Thank you. Your order has been received.</p>
                    <div className="flex flex-row">
                        {orderDetail}
                    </div>
                    <div>
                        <p className="text-xl md:text-2xl xl:text-3xl font-semibold">Order details</p>
                        <div className="border-r border-l">
                            <div className="w-full bg-dark-blue flex flex-row py-3 md:mt-5 text-lg font-semibold">
                                <div className="w-3/5 text-white self-start items-center border-r md:border-r-0 border-gray-500">
                                    <p className="lg:pl-14">Property & Service</p>
                                </div>
                                <div className="w-2/5 text-white">
                                    <p className="text-center">TOTAL</p>
                                </div>
                            </div>
                            <div className="w-full py-3">
                                {orderInfo.products.map((item, index) => {
                                    const propertyType  = attributes.property_type.options.find((data) => data.value ===item.property_type);
                                    return(
                                        <div className={`w-full flex flex-row py-4 ${index != orderInfo.products.length-1 && "border-b-4 border-dark-blue"}`}>
                                            <div className="w-3/5 items-center">
                                                <div className="w-full flex justify-start lg:pl-14">
                                                    <p className="text-center font-medium text-xl">{item.name}</p>
                                                </div>
                                                <div className="pt-5 lg:pl-14 text-sm xxl:text-lg">
                                                    <div className="flex flex-row">
                                                        <p className="font-bold mr-4">Postcode:</p>
                                                        <p className="font-medium">{item.property_postcode}</p>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <p className="font-bold mr-4">Address:</p>
                                                        <p className="font-medium">{item.property_address}</p>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <p className="font-bold mr-4">Property Type:</p>
                                                        <p className="font-medium">{propertyType?.title}</p>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <p className="font-bold mr-4">{item.bedroomsTitle}</p>
                                                        <p className="font-medium">{item.bedroomsvalue}</p>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <p className="font-bold mr-4">{item.consumerUnitTitle}</p>
                                                        <p className="font-medium">{item.consumetUnitvalue}</p>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <p className="font-bold mr-4">{item.elecApplienceTitle}</p>
                                                        <p className="font-medium">{item.elecAppliencevalue}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-2/5 m-auto">
                                                <p className="text-center font-bold">{"£" + parseFloat(item.total_amount.replace("$", '')).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {priceData.map((item, index) =>{
                                return(
                                    <div className={`w-full flex flex-row text-lg font-semibold`}>
                                        <div className={`w-2/4 bg-dark-blue py-3 text-white ${index === 0 && "border-t-2"} border-b-2 border-dark-blue`}>
                                            <p className="text-center">{item.title}</p>
                                        </div>
                                        <div className={`w-2/4 py-3 ${index === 0 && "border-t-2"} border-b-2 border-dark-blue`}>
                                            <p className="text-center">{item.value ==="Bank Transfer" ? item.value : "£" + parseFloat(item.value.replace('$', '')).toFixed(2)}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {orderData[3].value ==='Bank Transfer' && (
                <div className="w-full lg:w-[90%] flex flex-col justify-center pb-[25px] px-2">
                  <p>Note: Your order is on hold, pending receipt of the payment as shown above. we accept payments online, over the phone and through bank Transfer.</p>
                  <br/>
                  <p>To pay by bank transfer, make payment to:</p>
                  <br/>
                  <p className="text-xl md:text-2xl xl:text-3xl font-semibold">Our bank details</p>
                  <br/>
                  <p className="text-xl md:text-2xl xl:text-3xl font-semibold">Nationwide Services-UK Limited:</p>
                  <div className="flex mt-4">
                    <div className="border-r border-gray-500 border-dotted px-2 md:px-10">
                      <p className="text-xs">BANK:</p>
                      <p className="font-bold">Starling Bank</p>
                    </div>
                    <div className="border-r border-gray-500 border-dotted px-2 md:px-10">
                      <p className="text-xs">ACCOUNT NUMBER:</p>
                      <p className="font-bold">53831355</p>
                    </div>
                    <div className="md:border-r px-2 md:px-10">
                      <p className="text-xs">SORT CODE:</p>
                      <p className="font-bold">60-83-71</p>
                    </div>
                  </div>
                </div>
              )
            }
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const {query} = context;
    const res = await fetch(`${process.env.BASE_URL_DEV}/orders/${query.order_id}`);
    const data = await res.json();

    return {
        props: {
            orderInfo:data
        },
    };
};

export default OrderReceived
