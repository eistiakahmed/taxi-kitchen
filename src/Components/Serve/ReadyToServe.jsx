import React from 'react';
import ServeCard from './ServeCard';

const ReadyToServe = ({serve}) => {
  return (
    <div>
      {serve.map((s,index) => <ServeCard key={index} order={s}></ServeCard>)}
    </div>
  );
};

export default ReadyToServe;