import Image from 'next/image'

export default function HowItWorks({
                                     title = "",
                                     paragraph = "",
                                     index = 0,
                                     image=null,
                                     type = "",
                                   }) {
  return (


    <div
      className={`relative text-center bg-lime flex flex-col justify-center border-b-2 border-black rounded-sm 
          mt-8 md:mt-0 shadow-xl min-h-[280px] md:min-h-[325px] lg:min-h-[260px] xl:min-h-[230px] md:max-w-[240px] lg:max-w-[310px]
          xl:max-w-[370px]`}
    >
      <div className='flex items-center justify-center drop-shadow-lg w-[93px] h-[93px] rounded-full bg-white absolute self-center -top-12'>
        <Image src={image} alt='order' className={`${index!==1 ? "w-[50px] ":"w-[36px]" } `}/>
      </div>
      <h2
        className="lg:mt-[60px] xl:mt-[60px] mb-[23px] text-[15px] lg:text-[17px] text-black font-bold uppercase"
      >
        {title}
      </h2>
      <p
        className={`${
          type === "service" ? "text-[13px]" : "text-[13px]"
        } text-black px-[10%] h-[60%]`}
      >
        {paragraph}
      </p>
    </div>
  );
}
