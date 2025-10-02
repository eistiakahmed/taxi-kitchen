import React, { Suspense, useState } from 'react';
import OrderCard from '../OrderCard/OrderCard';


const orderPromise = async () => {
  const res = await fetch('/orders.json');
  return res.json();
};
const OrderCards = () => {
  const data = orderPromise();
  const [orderRes, SetOrderRes] = useState(data)
  console.log(data);
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <OrderCard orderRes={orderRes} SetOrderRes={SetOrderRes}></OrderCard>
      </Suspense>
    </div>
  );
};

export default OrderCards;
