import React from 'react'
import HeaderComponent from '../components/Header.component'
const WhoNeedsAnEpc = () => {
    return (
        <div className="w-full bg-white flex justify-center">
            <div className="w-full flex flex-col items-center">
                <HeaderComponent
                    header="Who Needs An EPC"
                    breadcrumb="Who Needs An EPC"
                    className="bg-dark-blue"
                />
                {/* w-full xl:ml-0 xl: mr-0  xl:max-w-[1114px] sm:ml-5 mr-5 flex flex-col font-montserrat mb-10 */}
                <div className='w-full flex flex-col xl:max-w-[1114px] pt-[65px] pb-[40px] px-3 xl:px-0'>
                    <p className='footer-paragraph font-opensans'>
                        The Government is complying with the Energy Performance of Building Directive (EPBD) with the introduction of the Energy Performance Certificate.
                        The EPC shows a record of the energy efficiency levels and CO2 emissions of a building, by using a standard table from A to G (A being very efficient,
                        G being very inefficient).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhoNeedsAnEpc