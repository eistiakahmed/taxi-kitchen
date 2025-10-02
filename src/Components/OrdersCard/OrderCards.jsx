import React, { Suspense } from 'react';
import OrderCard from '../OrderCard/OrderCard';
import { GridLoader, PacmanLoader } from 'react-spinners';

const orderPromise = async () => {
  const res = await fetch('/orders.json');
  return res.json();
};

const OrderCards = () => {
  const orderRes = orderPromise(); // Promise
  return (
    <div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-[60vh]">
            <PacmanLoader size={34} margin={2} color="#fcb700" />
          </div>
        }
      >
        <OrderCard orderRes={orderRes} />
      </Suspense>
    </div>
  );
};

export default OrderCards;
