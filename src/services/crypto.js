const getCoinList = (page, currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=20&page=${page}&x_cg_demo_api_key=CG-hveAnMZf8vVfPL7aRa9kwRfw	`;
};
const searchCoin = (query) =>
  `https://api.coingecko.com/api/v3/search?query=${query}&x_cg_demo_api_key=CG-hveAnMZf8vVfPL7aRa9kwRfw`;
const marketChart = (coin) =>
  `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=CG-hveAnMZf8vVfPL7aRa9kwRfw`;
export { getCoinList, searchCoin, marketChart };
