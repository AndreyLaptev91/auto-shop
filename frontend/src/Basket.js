import React from "react";

function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrise= cartItems.reduce((a,c) => a+c.price * c.qty 0);
  const taxPrice = itemsPrice * 0.16;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart Is Items</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="block col-2">
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
            <button onClick={() => onRemove(item)} className="remove">
              +
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
        <hr></hr>
        <div className="row">
          <div className="col-2"><strong>Сумма</strong></div>
          <div className="col-1 text-right">${itemsPrice}</div>
        </div>
        <div className="row">
          <div className="col-2"><strong>Налог</strong></div>
          <div className="col-1 text-right">${taxPrice}</div>
        </div>
        <div className="row">
          <div className="col-2"><strong>Доставка автовозом</strong></div>
          <div className="col-1 text-right">${shippingPrice}</div>
        </div>
        <div className="row">
          <div className="col-2"><strong>Общая сумма</strong></div>
          <div className="col-1 text-right">${totalPrice}</div>
          <hr/>
          <div className="row">
            <button onClick={() => alert("Заказ оформлен! ждите звонка оператора!")}>
              Checkout
            </button>
          </div>
        </div>
        </>
      )}
    </aside>
  );
}

export default Basket;
