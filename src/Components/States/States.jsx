import { CookingPot, ScrollText, TicketCheck } from 'lucide-react';
import React from 'react';

const States = () => {
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Current Orders */}
      <div className="border-4 border-dotted rounded-2xl border-amber-500 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
      {/* Currently Cooking */}
      <div className="border-4 border-dotted rounded-2xl border-amber-500 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100}/>
         
          <div className="text-xl text-center">
            Currently Cooking
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
      {/* Ready to Serve */}
      <div className="border-4 border-dotted rounded-2xl border-amber-500 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <TicketCheck className="animate-pulse" color="#fcb700" size={100} />
          
          <div className="text-xl text-center">
            Ready to Serve
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
