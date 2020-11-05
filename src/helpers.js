const moneyFormat = (money, currency = "₺") =>
  `${Number(money.toFixed(1))
    .toLocaleString()
    .replaceAll(".", ",")} ${currency}`;

const adana = () => console.log("adana");

export { moneyFormat, adana };
