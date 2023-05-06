import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "./cartSlice";
import Sidebars from "./sidebars";
const CartDetails = () => {
  const datas = useSelector((state) => state.cart);
  const state = useSelector((state) => state.login);
  const data = datas.cartItem;

  console.log(data.cartItem);
  const dispatch = useDispatch();
  //   const incrementCartItem = () => {
  //     dispatch(
  //       add({
  //         name,
  //         id,
  //         price,
  //       })
  //     );
  //   };
  //   const decrementCartItems = () => {
  //     dispatch(remove(id));
  //   };
  return (
    <div className="main">
      <div className="dashboard">
        <Sidebars />
      </div>
      <div>
        {data.length > 0 ? (
          data.map((item) => {
            return (
              <div key={item.id} className="cartItem">
                <h2> {item.name}</h2>
                <p>${item.price} /-</p>
                <p>x{item.quantity}</p>
                <article>Total ${Math.ceil(item.totalprice)}</article>
                <button
                  onClick={() => dispatch(add(item))}
                  className="cart-actions"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(remove(item.id))}
                  className="cart-actions"
                >
                  -
                </button>
              </div>
            );
          })
        ) : (
          <h1>No Cart items</h1>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
