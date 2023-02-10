import React, {useMemo} from "react";
import Head from "next/head";
import ButtonComponent from "../components/button.component";

const orderData = [
    {
        title: "ORDER NUMBER:",
        value: "1339324"
    },
    {
        title: "DATE:",
        value: "February 8, 2023"
    },
    {
        title: "TOTAL:",
        value: "$70.00"
    },
    {
        title: "PAYMENT METHOD:",
        value: "Debit/Credit Card"
    },
]
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
const priceData = [
    {
        title: "SUBTOTAL",
        value: "$377.00",
    },
    {
        title: "DISCOUNT",
        value: "-$15.00",
    },
    {
        title: "PAYMENT METHOD",
        value: "Debit/Credit Card",
    },
    {
        title: "TOTAL",
        value: "$362.00",
    },
]
const OrderReceived: React.FunctionComponent = () => {
    const orderDetail = useMemo<JSX.Element[]>(() => {
       const element:JSX.Element[] = []
        orderData.forEach((data) => {
            element.push(
                <div className="flex flex-row mr-10 pt-5 pb-5 md:p-5">
                    <div className={`md:border-r border-gray-500 border-dotted md:pr-10 text-sm`}>
                        <p>{data.title}</p>
                        <p className="font-bold">{data.value}</p>
                    </div>
                </div>
            )
        })
        return element
    },[])
    return(
        <div className="w-full flex flex-col justify-center items-center">
            <Head>
                <title>Checkout - Nationwide Surveyors</title>
            </Head>
            <div className="w-full flex flex-wrap justify-center items-start sm:gap-x-22 mt-14 mb-14">
                <div className="w-full lg:w-[80%] flex flex-col justify-center pt-[35px] pb-[25px] px-2">
                    <div className="w-[60%] md:w-1/4 lg:w-[20%] xl:w-[15%]">
                        <ButtonComponent
                            text="RETURN TO HOME PAGE"
                            className="bg-dark-blue text-white text-xs font-semibold px-[20px] py-[10px]
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
                                <div className="w-3/5 text-white items-center border-r md:border-r-0 border-gray-500">
                                    <p className="text-center">PRODUCT</p>
                                </div>
                                <div className="w-2/5 text-white">
                                    <p className="text-center">TOTAL</p>
                                </div>
                            </div>
                            <div className="w-full py-3">
                                {productData.map((item, index) => {
                                    return(
                                        <div className={`w-full flex flex-row py-4 ${index != productData.length-1 && "border-b-4 border-dark-blue"}`}>
                                            <div className="w-3/5 items-center">
                                                <div className="w-full">
                                                    <p className="text-center font-medium text-xl">{item.serviceName}</p>
                                                </div>
                                                <div className="pt-5 lg:pl-14 text-sm xxl:text-lg">
                                                    <div className="flex flex-row">
                                                        <p className="font-bold mr-4">{item.posttitle}</p>
                                                        <p className="font-medium">{item.postvalue}</p>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <p className="font-bold mr-4">{item.addressTitle}</p>
                                                        <p className="font-medium">{item.addressValue}</p>
                                                    </div>
                                                    <div className="flex flex-row mt-2">
                                                        <p className="font-bold mr-4">{item.propTypeTitle}</p>
                                                        <p className="font-medium">{item.propTypeValue}</p>
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
                                                <p className="text-center font-bold">{item.total}</p>
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
                                            <p className="text-center">{item.value}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderReceived