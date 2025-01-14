import { useState } from "react";

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
  const [inc_dec, setInc_dec] = useState(2);
  const [inc_dec_value, setInc_dec_value] = useState(1);

  const inc_decClick = () => {
    setInc_dec(parseInt(inc_dec_value > 100 ? 100 : inc_dec_value));
  };

  const inputValueclick = () => {
    setNumber(parseInt(inputValue > 100 ? 100 : inputValue));
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
          onClick={inc_decClick}
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
            setNumber(number === 0 ? 0 : number - inc_dec);
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
            console.log(number);

            setNumber(number + inc_dec);
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
        show history
      </button>
    </div>
  );
}

export default App;
