export default function HowItWorks({
  title = "",
  paragraph = "",
  index = 0,
  type = "",
}) {
  return (
    <>
      <div className="bg-lime  font-semibold top-[-14px] z-[200]  mx-auto text-white md:hidden text-center w-[30px] h-[30px] sticky rounded-full mb-[-20px]">
        {index + 1}
      </div>
      <div
        className={`${
          type === "service" ? "px-[6px] py-[5px]" : "px-[16px] py-[5px]"
        } md:w-4/12 text-center drop-shadow-lg`}
      >
        <div
          className={`${
            type === "service"
              ? "mb-[15px] px-[10px] pt-[12px] pb-[38px]"
              : "mb-[15px] px-[10px] pt-[12px] pb-[38px]"
          } bg-lime flex flex-col justify-center rounded min-h-[250px] min-w-[200px]`}
        >
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
