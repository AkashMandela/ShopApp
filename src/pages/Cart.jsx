import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="mb-10">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row justify-center mx-2 lg:mx-auto gap-5">
          {/* Cart Items */}
          <div className="w-full lg:w-[60%] flex flex-col p-2">
            {cart.map((cartItem, index) => (
              <CartItem item={cartItem} key={cartItem.id} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-[40%] mt-5 flex flex-col px-3">
            <div className="flex flex-col justify-between p-5 gap-5 my-10 bg-gray-50 rounded-md shadow-md">
              <div className="flex flex-col gap-3">
                <div className="font-semibold text-xl text-green-800">
                  Your Cart
                </div>
                <div className="font-semibold text-4xl text-green-700">
                  Summary
                </div>
                <p className="text-lg">
                  <span className="text-gray-700 font-semibold">
                    Total Items: {cart.length}
                  </span>
                </p>
              </div>

              <div className="mt-4">
                <p className="text-lg font-bold">
                  <span className="text-gray-700 font-semibold">
                    Total Amount:
                  </span>{" "}
                  ${amount}
                </p>
                <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-lg w-full">
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center px-3 text-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <NavLink to="/">
            <button className="uppercase bg-green-600 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600">
              shop now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
