import React from "react";

function Input({ inc_decClick, inc_dec_value, setInc_dec_value }) {
  return (
    <div className="flex flex-col gap-1 mt-5">
      <label>Increment/Decrement Value:</label>
      <input
        onKeyUp={inc_decClick}
        value={inc_dec_value}
        onChange={(e) => {
          const value = e.currentTarget.value;
          if (value === "" || !isNaN(value)) {
            setInc_dec_value(value || 0);
          }
        }}
        className="border h-10 pl-3 w-full"
        type="number"
      />
    </div>
  );
}

export default Input;
