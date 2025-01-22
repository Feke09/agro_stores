import React, { useState } from "react";
import { Input } from "antd";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Payment from "./payment";

const CheckoutForm = () => {
  const [checkOutFormData, setCheckOutFormData] = useState({
    name: "",
    email: "",
    deliveryAddress: "",
  });

  const { cartItems, userCartSummary } = useSelector((state) => state.cart);

  //   console.log("My cart items", cartItems);
  //   console.log("My order summary", userCartSummary);

  if (cartItems.length < 1 || userCartSummary < 0) {
    return <Navigate to={"/marketplace"} />;
  }
  return (
    <>
      <form className="grid gap-5">
        <Input
          onChange={(e) =>
            setCheckOutFormData({ ...checkOutFormData, name: e.target.value })
          }
          placeholder="Enter your name"
          size="Large"
        />
        <Input
          onChange={(e) =>
            setCheckOutFormData({ ...checkOutFormData, email: e.target.value })
          }
          placeholder="Enter your email"
          size="Large"
        />
        <Input
          onChange={(e) =>
            setCheckOutFormData({
              ...checkOutFormData,
              deliveryAddress: e.target.value,
            })
          }
          placeholder="Enter your Delivery address"
          size="Large"
        />
      </form>
      <Payment checkOutFormData={checkOutFormData} />
    </>
  );
};

export default CheckoutForm;
