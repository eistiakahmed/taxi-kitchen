import React, { use, useState } from 'react';
import Card from './Card';
import States from '../States/States';
import Cooking from '../Cooking/Cooking';
import ReadyToServe from '../Serve/ReadyToServe';

const OrderCard = ({ orderRes,SetOrderRes }) => {
  const [cooking, SetCooking] = useState([]);
  const [serve, SetServe] = useState([]);

  // const handleCook = (order) => {
  //   const newCook = [...cooking, order]
  //   SetCooking(newCook)
  // }

  const handleServe = (food) => {
    const newServe = [...serve, food];
    SetServe(newServe);
    
    const remaining = cooking.filter(item => item.id !== food.id)
    SetCooking(remaining);

    const remainingOrder = orderRes.filter(item => item.id !== food.id)
    SetOrderRes(remainingOrder)
    console.log(remainingOrder)
  };

  // console.log(serve);

  const handleOrder = (order) => {

    const isExist = cooking.find(item=> item.id == order.id)

    // console.log(isExist)

    if(isExist){
      alert("All ready Cooking...!!")
      return;
    }


    const newCook = [...cooking, order];
    SetCooking(newCook);
  };
  // console.log(cooking);
  const orderJSON = use(orderRes);
  // console.log(orderJSON);
  return (
    <>
      <States
        cooking={cooking}
        orderTotal={orderJSON.length}
        serve={serve}
      ></States>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-bold mb-2">Current Order</h2>
          <div className="space-y-5">
            {orderJSON.map((order) => (
              <Card
                key={order.id}
                order={order}
                SetCooking={SetCooking}
                handleOrder={handleOrder}
              ></Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 ">
          <h2 className="text-4xl font-bold mb-2">Currently Cooking</h2>
          <div className="shadow p-10">
            <Cooking cooking={cooking} handleServe={handleServe}></Cooking>
          </div>
          <h2 className="text-4xl font-bold mt-10">Ready to Serve</h2>
          <div className="shadow p-10">
            <ReadyToServe serve={serve}></ReadyToServe>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default OrderCard;
