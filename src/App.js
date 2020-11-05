import { useState, useEffect } from "react";
import Item from "./components/Item";
import Receipt from "./components/Receipt";
import { moneyFormat } from "./helpers";
import getItems from "./items.json";

export default function App() {

  const startingMoney = 250000;

  let items = getItems.sort((a, b) => Math.sign(a.price - b.price));

  const [money, setMoney] = useState(startingMoney);
  const [basket, setBasket] = useState([]);

  const toggleBasket = (id, total = 0) => {
    if (total === 0) {
      const products = basket
        .map((product) => {
          if (product.id === id) product.total -= 1;
          if (product.total !== 0) return product;
        })
        .filter(Boolean);
      setBasket(products.length ? [...products] : []);
    } else {
      const products = basket.filter((item) => item.id !== id);
      setBasket([...products, { id, total }]);
    }
  };

  useEffect(() => {
    if (basket.length) {
      let basketTotalPrice = basket
        .map((basketItem) => {
          return basketItem.total * items[basketItem.id].price;
        })
        .reduce((a, b) => a + b);
      setMoney(startingMoney - basketTotalPrice);
    } else {
      setMoney(startingMoney);
    }
  }, [basket]);

  return (
    <div className="App">
      <div className="header">
        <img src="https://pbs.twimg.com/profile_images/1317812642887630848/AGLUtE6B_400x400.jpg" />
        <h1>Spend Tayfun' Money</h1>
      </div>
      <h2 className="money-text">
        {money > 0 ? moneyFormat(money) : "Tayfun'un parası kalmadı"}
      </h2>
      <div className="products">
        {items.map((item, key) => (
          <Item
            key={key}
            id={key}
            data={item}
            money={money}
            toggleBasket={toggleBasket}
          />
        ))}
      </div>
      {basket.length > 0 && (
        <Receipt
          basket={basket}
          money={money}
          items={items}
          startingMoney={startingMoney}
        />
      )}
    </div>
  );
}
