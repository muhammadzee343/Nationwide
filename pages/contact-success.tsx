import React from 'react'
import styles from "../styles/footer.module.css";

const ContactSuccess = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className="flex flex-col pt-[65px] pb-[40px] px-3 xl:px-0 w-full lg:max-w-[900px] xl:max-w-[1050px]">
                <div className='border-l-[6px] pl-4 p-y-2 border-lime'>
                    <h1 className={`${styles.footerPagesHeading} `}>
                        Request a callback
                    </h1>
                </div>
                <br />
                <p className={`pb-3 ${styles.footerSmallHead}`}>
                    We have recieved your inquiry and would like to thank you for writing us. if your inquiry is urgent,
                    please use the telephone number listed below to talk to one of our staff members during our 
                    working hours.
                </p>
                <p className={`pb-3 ${styles.footerSmallHead}`}>
                   Otherwise, we will get back to you as sson as possible.
                </p>
                <p className={`pb-3 ${styles.footerSmallHead}`}>
                    Talk to you soon
                </p>
            </div>
        </div>
    )
}

export default ContactSuccess