import { moneyFormat } from "../helpers";

function Receipt(props) {
    return (
        <div className="receipt">
        <h3>Your Receipt</h3>
        <div className="receipt-container">
          {props.basket.map((basketItem) => {
            let item = props.items[basketItem.id];
            return (
              <div key={basketItem.id} className="receipt-item">
                <div>{item.name}</div>
                <div>x{basketItem.total}</div>
                <div>{moneyFormat(basketItem.total * item.price)}</div>
              </div>
            );
          })}
          <div className="receipt-item total">
            <div>TOTAL</div>
            <div>{moneyFormat(props.startingMoney - props.money)}</div>
          </div>
        </div>
      </div>
    )
}

export default Receipt
