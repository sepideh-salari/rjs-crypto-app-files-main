import { useEffect, useState } from "react";
import TableCoin from "../Modules/TableCoin";
import { getCoinList } from "../../services/crypto";
import Pagination from "../Modules/Pagination";
import Search from "../Modules/Search";
import Chart from "../Modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
  const currencySymbols = {
    usd: "$",
    eur: "€",
    jpy: "¥",
  };
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        console.log({ json });
        setCoins(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        setChart={setChart}
        currencySymbol={currencySymbols[currency]}
      />
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
}

export default HomePage;
