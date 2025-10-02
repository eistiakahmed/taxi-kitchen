import React, { use, useState } from 'react';
import Card from './Card';
import States from '../States/States';
import Cooking from '../Cooking/Cooking';
import ReadyToServe from '../Serve/ReadyToServe';
import { toast } from 'react-toastify';

const OrderCard = ({ orderRes }) => {
  const data = use(orderRes);   // 🔥 Ay khane Promise resolve hobe
  const [currOrder, SetCurrOrder] = useState(data);
  const [cooking, SetCooking] = useState([]);
  const [serve, SetServe] = useState([]);

  const handleServe = (food) => {
    food.cookedAt = new Date(). toLocaleTimeString()
    SetServe([...serve, food]);
    toast.success("The food is ready")
    SetCooking(cooking.filter((item) => item.id !== food.id));
    SetCurrOrder(currOrder.filter((item) => item.id !== food.id));
  };

  const handleOrder = (order) => {

    // toast("Order called")
    if (cooking.find((item) => item.id === order.id)) {
      toast.error('Order All ready on processing');
      return;
    }
    SetCooking([...cooking, order]);
  };

  return (
    <>
      <States cooking={cooking} orderTotal={currOrder.length} serve={serve} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold mb-2">Current Order</h2>
          <div className="space-y-5">
            {currOrder.map((order) => (
              <Card key={order.id} order={order} handleOrder={handleOrder} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="text-3xl font-bold mb-3">Currently Cooking</h2>
          <div className="shadow p-10 rounded-4xl">
            <Cooking cooking={cooking} handleServe={handleServe} />
          </div>
          <h2 className="text-3xl font-bold mt-10 mb-3">Ready to Serve</h2>
          <div className="shadow p-10 rounded-4xl">
            <ReadyToServe serve={serve} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
