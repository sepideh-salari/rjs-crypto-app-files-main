import { RotatingLines } from "react-loader-spinner";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableCoin.module.css";
import { marketChart } from "../../services/crypto";
function TableCoin({ coins, isLoading, setChart, currencySymbol }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                setChart={setChart}
                currencySymbol={currencySymbol}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({ coin, setChart, currencySymbol }) => {
  const {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({ ...json, coin });
    } catch (error) {
      setChart(null);
    }
  };
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currencySymbol}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};
