import React from "react";
import SelectProperty from "../../../components/selectProperty.component";
import { howItWorks, service } from "../../../utility/constants";
import ServiceInfo from "../../../components/serviceInfo.component";
import Head from "next/head";
import StepperComponent from "../../../components/stepper.component";
import HowItWorks from "../../../components/howItWorksCard.component";
import OrderNowCard from "../../../components/orderNowCard.component";
import ServiceHeader from "../../../components/serviceHeader.component";

function Service({ certificate }: any) {
  return (
    <>
      {certificate[0]?.servicesDec && <ServiceHeader servicesDec={certificate[0]?.servicesDec} />}
      <div className="w-full flex justify-center bg-grey-200">
        <div className="w-full xxl:container flex flex-col lg:flex-row">
          <Head>
            <title>{certificate[0].title}</title>
            {
              certificate[0]?.metaData && Object.entries(certificate[0]?.metaData).map((data) => {
                return (
                  <meta
                    name={data[0]}
                    content={data[1]}
                  />
                );
              })
            }

          </Head>
          <div className="xl:w-4/12 2xl:w-4/12 bg-grey-200 flex justify-end items-start pt-20 ">
            <div className="w-full flex xl:w-8/12 2xl:w-6/12 lg:mr-5 justify-end items-start top-[60px] sticky">
              <div className="w-full lg:w-[296px] px-4 lg:px-0 justify-end">
                <SelectProperty />
              </div>
            </div>
          </div>
          <div className="xl:w-8/12 2xl:w-8/12 flex flex-col bg-white py-16">
            <div className=" px-5">
              {certificate?.map(({ className, content }: any, index: any) => {
                return (
                  <>
                    <div
                      className={`${
                        index % 2 == 0
                          ? "flex flex-col lg:flex-row"
                          : "flex flex-col-reverse lg:flex-row-reverse"
                      } pb-[60px] gap-6 `}
                      key={index}
                    >
                      <ServiceInfo content={content} className={className} />
                    </div>
                    {index === 0 && <hr className="w-[90%] flex mx-auto" />}
                  </>
                );
              })}
            </div>
            <div className="2xl:w-8/12 px-4">
              <section>
                <div className="bg-row_bg w-full flex flex-col items-center justify-center px-3">
                  <div className="w-full md:container flex flex-col  flex-wrap  pb-[60px]">
                    <div className="border-l-[8px] border-lime mb-[30px] px-6 py-2">
                      <h2 className="text-dark-blue text-4xl font-medium font-bold">
                        How it works?
                      </h2>
                    </div>
                    <StepperComponent />
                    <div className="w-full flex flex-col md:flex-row justify-center md:items-center xl:flex-nowrap gap-1 xl:gap-7">
                      {howItWorks.map(({ title, paragraph }: any, index) => {
                        return (
                          <HowItWorks
                            key={index}
                            title={title}
                            paragraph={paragraph}
                            type="service"
                            index={index}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
              <OrderNowCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Service.getInitialProps = (props: any) => {
  const { slug } = props.query;
  const certificate: any = service.filter((ele) => {
    return ele.content.certificate === slug;
  });
  return { certificate };
};

export default Service;
