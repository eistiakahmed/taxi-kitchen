import React from 'react';
import Cook from './Cook';

const Cooking = ({ cooking,handleServe }) => {
  // console.log(cooking);
  return (
    <div>
      {cooking.map((cook) => (
        <Cook key={cook.id} cook={cook} handleServe={handleServe}></Cook>
      ))}
    </div>
  );
};

export default Cooking;
