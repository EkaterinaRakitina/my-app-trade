import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTrade, ITrade } from "./app/tradeReducer";
import "./App.css";

const App = () => {
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = React.useState(0);
  // const [currency, setCurrency] = useState("");

  const dispatch = useDispatch();
  const trade = useSelector(selectTrade);
  console.log(trade);

  // const openTrade = () => {
  //   dispatch({type: "OPEN_TRADE"})
  // }

  const goBack = () => {
    setModal(false);
  };

  const handleChangeAmount = (e: any) => setAmount(e.target.value);
  // const handleChangeCurrency = (e: any) => setCurrency(e.target.value);
  console.log(typeof amount);
  // console.log(currency);

  const handleClickAddTrade = () => {
      dispatch({
        type: "ADD_TRADE",
        payload: {
          amount: +amount,
          currency: "$",
        },
      });
    setAmount(0);
    // setCurrency('');
    goBack();
  };

  return (
    <div className="App">
      <div className="Trades-block">
        <h2>Trade</h2>
        {trade.map((item: ITrade, index: number) => (
          <div key={`trade-${index}`}>
            {item.amount} {item.currency}
          </div>
        ))}
      </div>

      <button className="Open-button" onClick={() => setModal(true)}>
        Open Trade
      </button>

      {modal && (
        <div className="Modal-block">
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" onChange={handleChangeAmount} />
          </div>
          {/* <div>
            <label htmlFor="currency">Currency</label>
            <input type="text" id="currency" onChange={handleChangeCurrency} />
          </div> */}
          <button onClick={handleClickAddTrade}>Buy</button>
        </div>
      )}
    </div>
  );
};

export default App;
