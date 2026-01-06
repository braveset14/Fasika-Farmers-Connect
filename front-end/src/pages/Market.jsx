import useFetch from "../hooks/useFetch";
import { getMarketData } from "../api/services/market.service";


export default function Market() {
  const { data, loading, error } = useFetch(getMarketData);

  const fallbackData = [
    { crop: "Maize", price: "2,500 ETB / quintal", region: "Oromia" },
    { crop: "Teff", price: "6,800 ETB / quintal", region: "Amhara" },
  ];

  const marketData = data || fallbackData;

  return (
    <div className="market">
      <h1>Market Prices</h1>

      <table className="market-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Price</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((item, i) => (
            <tr key={i}>
              <td>{item.crop}</td>
              <td>{item.price}</td>
              <td>{item.region}</td>
            </tr>
          ))}
        </tbody>
      </table>

   
    </div>
  );
}
