import React from 'react';

const Cook = ({ cook, handleServe }) => {
  return (
    <div
      className="rounded-xl p-5 shadow hover:shadow-lg mb-5 border-1 border-amber-300"
      style={{
        background: "linear-gradient(#ffffff90, #FCB700), url('/cook-bg.gif')",
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-bold text-amber-400 mb-2">
        {cook.order_title}
      </h3>

      {/* Quantity */}
      <p className="text-lg font-semibold">
        Quantity: <span className="text-gray-700">{cook.quantity}</span>
      </p>

      {/* Special Instruction */}
      <p className="text-xs text-gray-600 mt-2 italic">
        {cook.special_instruction}
      </p>

      {/* Static Button */}
      <button onClick={()=> handleServe(cook)} className="px-6 mt-3 py-1 shadow text-sm hover:bg-amber-400 hover:text-white bg-white cursor-pointer rounded-xl">
        Cooked
      </button>
    </div>
  );
};

export default Cook;
