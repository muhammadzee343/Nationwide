import React from 'react'
import HeaderComponent from '../components/Header.component'
const WhoNeedsEicr = () => {
    return (
        <div className="w-full bg-white flex justify-center">
            <div className="w-full flex flex-col items-center">
                <HeaderComponent
                    header="Who Needs EICR"
                    breadcrumb="Who Needs EICR"
                    className="bg-dark-blue"
                />
                {/* w-full xl:ml-0 xl: mr-0  xl:max-w-[1114px] sm:ml-5 mr-5 flex flex-col font-montserrat mb-10 */}
                <div className='w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0 font-opensans'>
                    <h1 className='footerPagesHeading'>Electrical Installation Condition Report (EICR)</h1>
                    <br />
                    <p className='footer-paragraph font-normal h-20'>
                        whether it’s your home, a business or a property you rent out, your electrical installation should always be covered by an in date Electrical Condition Report.
                        Although it’s not a legal requirement to have an Electrical Condition Report many legal documents refer to an Electrical Condition Report as a way of
                        satisfying their requirements- The Electricity at Work Act as one example.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhoNeedsEicr