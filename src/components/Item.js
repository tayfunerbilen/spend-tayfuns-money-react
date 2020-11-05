import { useState, useEffect } from "react";
import { moneyFormat } from "../helpers";

function Item(props) {
  let product = props.data;

  const [total, setTotal] = useState(0);

  const buyBtn = () => {
    let newTotal = total + 1;
    setTotal(newTotal);
    props.addBasket(props.id, newTotal);
  };

  const sellBtn = () => {
    setTotal(total - 1);
    props.removeBasket(props.id);
  };

  return (
    <div className="product-item">
      {product.image && <img src={product.image} className="image" />}
      <div className="title">{product.name}</div>
      <div className="price">{moneyFormat(product.price)}</div>
      <div className="product-item-footer">
        <button className="sell-btn" disabled={total === 0} onClick={sellBtn}>
          Sell
        </button>
        <input value={total} readOnly />
        <button
          disabled={props.money - product.price < 0}
          className="buy-btn"
          onClick={buyBtn}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Item;
