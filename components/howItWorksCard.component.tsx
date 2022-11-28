// @ts-ignore
export default function HowItWorks({ title = "", paragraph = "", index = "" }) {
  return (
    <>
      <div
        className={`bg-lime flex flex-col justify-center rounded min-h-[250px] min-w-[200px] max-w-[350px] relative   text-center drop-shadow-lg p-[15px] mb-[15px]`}
      >
        <span
          className={`bg-lime absolute font-semibold top-[-14px] inset-x-0 mx-auto text-white md:hidden  w-[30px] h-[30px] rounded-full`}
        >
          {index + 1}
        </span>
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
