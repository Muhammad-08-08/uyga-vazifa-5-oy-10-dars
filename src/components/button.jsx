import React from "react";

const RefreshIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    color={"#ffffff"}
    fill={"none"}
    {...props}
  >
    <path
      d="M20.0092 2V5.13219C20.0092 5.42605 19.6418 5.55908 19.4537 5.33333C17.6226 3.2875 14.9617 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Button({ number, inc_dec, setNumber }) {
  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={() => {
          setNumber(number - inc_dec < 0 ? 0 : number - inc_dec);
        }}
        className="h-20 rounded-xl w-20 bg-red-600 text-2xl text-white"
      >
        <p>-</p>
        <p>{inc_dec}</p>
      </button>
      <button
        onClick={() => {
          setNumber(number > 0 ? 0 : 0);
        }}
        className="h-20 rounded-xl w-20 bg-gray-600 text-2xl text-white px-[27px]"
      >
        <RefreshIcon />
      </button>
      <button
        onClick={() => {
          setNumber(number + inc_dec > 100 ? 100 : number + inc_dec);
        }}
        className="h-20 rounded-xl w-20 bg-green-600 text-2xl text-white"
      >
        <p>+</p>
        <p>{inc_dec}</p>
      </button>
    </div>
  );
}

export default Button;
