import { useState } from "react";

const Timer01Icon = (props) => (
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
      d="M11.0809 13.152L8 7L13.4196 11.2796C14.1901 11.888 14.1941 13.0472 13.4277 13.6607C12.6614 14.2743 11.5189 14.0266 11.0809 13.152Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 4.82C3.14864 6.63902 2 9.17385 2 11.9776C2 17.5129 6.47715 22.0001 12 22.0001C17.5228 22.0001 22 17.5129 22 11.9776C22 7.1242 18.5581 3.07656 13.9872 2.15288C13.1512 1.98394 12.7332 1.89947 12.3666 2.20022C12 2.50097 12 2.98714 12 3.95949V4.96175"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

function App() {
  const [number, setNumber] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [inc_dec, setInc_dec] = useState(1);
  const [inc_dec_value, setInc_dec_value] = useState(1);

  const inc_decClick = () => {
    setInc_dec(parseInt(inc_dec_value) > 100 ? 100 : parseInt(inc_dec_value));
  };
  const inputValueclick = () => {
    const value = parseInt(inputValue);
    setNumber(value > 100 ? 100 : value);
    setInputValue("");
  };
  return (
    <div className="bg-white mx-auto px-10 py-5 rounded-xl w-max mt-32">
      <h1 className="text-3xl text-blue-700 text-center font-bold">
        Advanced Counter
      </h1>
      <h2 className="text-5xl text-center mt-4 font-bold">{number}</h2>

      <div className="flex flex-col gap-1 mt-5">
        <label>Increment/Decrement Value:</label>
        <input
          onKeyUp={inc_decClick}
          value={inc_dec_value}
          onChange={(e) => {
            setInc_dec_value(e.currentTarget.value);
          }}
          className="border h-10 pl-3 w-full"
          type="number"
        />
      </div>

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

      <div className="flex gap-5 mt-5">
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
          }}
          className="border w-52 h-10 pl-2"
          type="number"
          placeholder="enter value (1-100)"
        />
        <button
          onClick={inputValueclick}
          className="w-10 h-10 text-white rounded-md bg-blue-700"
        >
          Set
        </button>
      </div>

      <button className="h-12 w-full bg-blue-500 text-white text-xl rounded-md mt-4">
        <div className="flex items-center mx-auto w-max h-max gap-3">
          <Timer01Icon /> show history
        </div>
      </button>
    </div>
  );
}

export default App;
