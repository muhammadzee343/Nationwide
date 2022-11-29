// @ts-ignore
export default function HowItWorks({ title = "", paragraph = "", index = 0 }) {
  return (
    <>
      <div
        className={`bg-lime  font-semibold top-[-14px] z-[200]  mx-auto text-white md:hidden text-center w-[30px] h-[30px] sticky rounded-full mb-[-20px]`}
      >
        {index + 1}
      </div>
      <div
        className={`bg-lime flex flex-col justify-center rounded overflow-auto min-h-[250px] min-w-[200px] max-w-[350px] text-center drop-shadow-lg p-[15px] mb-[15px]`}
      >
        <h2
          className={`text-[20px] text-dark-blue font-bold uppercase mb-[15px]`}
        >
          {title}
        </h2>
        <p className={`text-base text-dark-blue pl-2.5 pr-2.5`}>{paragraph}</p>
      </div>
    </>
  );
}
