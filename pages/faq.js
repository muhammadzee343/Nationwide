import React from 'react'
import HeaderComponent from '../components/Header.component'
import FaqCardComponent from '../components/FaqCard.component'
import ButtonComponent from '../components/Button.component'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faBarChart, faHeadset, faTelevision } from '@fortawesome/free-solid-svg-icons';

function Feq() {
    return (
        <div className="w-full bg-white flex justify-center">
            <div className="w-full flex flex-col items-center">
                <HeaderComponent
                    header="FAQs"
                    breadcrumb="FAQs"
                    className="bg-dark-blue"
                />
                {/* w-full xl:ml-0 xl: mr-0  xl:max-w-[1114px] sm:ml-5 mr-5 flex flex-col font-montserrat mb-10 */}
                <div className='w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0 font-opensans'>
                    <div className='grid place-items-center'>
                        <h1 className='font-medium text-4xl text-center mb-5'>Frequently Asked Questions</h1>
                        <div className='h-1.5 w-20 bg-lime' /><br />
                        <p className='w-4/6 text-center text-[15px] leading-7'>Below is a list of answers to Frequently Asked Questions about most of the services.
                            If your question isn’t answered in any of the below, please feel free to contact us and we’ll be happy to help with your query.</p>
                        <br />
                    </div>
                    <div className='md:flex md:flex-row content-between grid-cols-3 gap-4'>
                        <div className='border border-gray-300 w-full md:w-4/12'>
                            
                            <FaqCardComponent
                                iconProps={<FontAwesomeIcon className="w-[45px] text-lime" icon={faTelevision} />}
                                title="Place Order Online"
                                description="Please select the services required and place order online 24/7. Our services can be ordered individually or as a combined Bundle Package.
                            Prefer to place order over the phone? please call us FREE at 0800 048 7474."/>
                        </div>
                        <div className='border border-gray-300 w-full md:w-4/12'>
                            <FaqCardComponent
                                iconProps={<FontAwesomeIcon className="w-[45px] text-lime" icon={faHeadset} />}
                                title="Assessment Survey Booked"
                                description="Once you placed order online, our customer support team will get in touch with you to arrange a suitable date and time to carry 
                            out the assessment survey for each service ordered, according to your suitability."/>
                        </div>
                        <div className=' border border-gray-300 w-full md:w-4/12'>
                            <FaqCardComponent
                                iconProps={<FontAwesomeIcon className="w-[45px] text-lime" icon={faBarChart} />}
                                title="Certificates Issued"
                                description="Certificates will be issued digitally for each service ordered and sent to you by email, within 48 hours of Assessor’s visit. 
                            Being an online customer, you will also be able to download your certificates from your online account with us."/>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-lime flex justify-center'>
                    <div className='w-full flex flex-col xl:max-w-[1024px] pt-[40px] pb-[50px] px-3 xl:px-0 font-opensans md:flex md:flex-row items-center'>
                        <div className='max-w-3/4'>
                            <p className='text-[25px] text-white'>Still couldn't find the answers you are looking for ? Please</p>
                        </div>
                        <Link href="#">
                            <ButtonComponent
                                text="CONTACT US"
                                className="bg-lime text-white border-2 border-white font-medium uppercase px-[20px] py-[13px] hover:bg-white hover:text-black ease-in duration-200 ml-8"
                            />
                            {/* <div className='border-2 border-white p-2 text-white ml-8  w-fit hover:bg-white hover:text-black'>
                                <p className='font-normal'></p>
                            </div> */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feq