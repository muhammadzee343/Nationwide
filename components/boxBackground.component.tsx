import React from 'react';

const BoxBackgroundComponent = ({children, className, greyStyle, limeStyle, contentStyle}:any) => {

    return (
        <div className={`relative z-0 ${className}`}>
            <div className={`absolute z-10 bg-slate-100 ${greyStyle}`}>
            </div>
            <div className={`absolute z-20 bg-opacity-20 bg-lime ${limeStyle}`}>
            </div>
            <div className={`z-30 w-full h-full absolute left-0 top-0 ${contentStyle}`}>
                {children}
            </div>
        </div>
    )

}

export default BoxBackgroundComponent;
