import Image from 'next/image'

export default function HowItWorks({
  title = "",
  paragraph = "",
  index = 0,
  image=null,
  type = "",
}) {
  return (
    <>

      <div
        className={`${
          type === "service" ? "px-[6px] py-[5px]" : "md:px-[16px] py-[5px]"
        } mt-8 md:mt-0 md:w-4/12 text-center drop-shadow-lg`}
      >

        <div
          className={`${
            type === "service"
              ? "mb-[15px] px-[10px] pt-[12px] pb-[38px]"
              : "mb-[15px] px-[10px] pt-[50px] pb-[38px]"
          } bg-lime flex flex-col border-b-4 border-black justify-center rounded min-h-[340px] md:min-h-[455px] lg:min-h-[310px] min-w-[200px]`}
        >
            <div className='flex items-center justify-center w-24 h-24 rounded-full bg-white absolute self-center -top-12'>
                <Image src={image} alt='order' className='w-[36px]'/>
            </div>
          <h2
            className={`${
              type === "service"
                ? "text-[16px] mb-[8px]"
                : "text-[20px] mb-[15px]"
            } text-dark-blue font-bold uppercase`}
          >
            {title}
          </h2>
          <p
            className={`${
              type === "service" ? "text-[15px]" : "text-basic"
            } text-dark-blue pl-2.5 pr-2.5`}
          >
            {paragraph}
          </p>
        </div>
      </div>
    </>
  );
}
