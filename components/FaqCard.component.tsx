import React from 'react'

function FaqCard({iconProps = "", title="", description=""}) {
    return (
        <div className='flex flex-row pt-4 pb-36 md:pb-16 pl-5 pr-5 font-opensans'>
            <div className='leading-7 pt-1'>
                {iconProps}
            </div>
            <div className='pl-5'>
                <h1 className='text-[20px] font-semibold leading-7 pb-2'>{title}</h1>
                <p className='font-normal leading-7 text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default FaqCard