import React from "react";

function RadioInput({ label, value, register, name, className = "", required, errors, errorClass="" }: any) {
  console.log(name, errors[name])
  return (
    <label className={`${className}`}>
      <div className="my-1.5">
        <input
          type="radio"
          value={value}
          {...register(name, {
            required: { value: required, message: "Field is Required" },
          })}
          className="mb-[4px] mr-[13px] h-[20px] w-[20px]"
        />
        {label}
      </div>
      {(errors[name] && value) && (
        // <div className={`p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-40 ${errorClass}`}
        //      role="alert">
        //     {errors[name].message}
        // </div>
        <div
          className={
            `flex  text-sm text-red-800 rounded-lg mt-2 dark:bg-gray-800 dark:text-red-400 ${errorClass}`
          }
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="sr-only">Info</span>
          <div>{errors[name].message}</div>
        </div>
      )}
    </label>
  );
}

export default RadioInput;
