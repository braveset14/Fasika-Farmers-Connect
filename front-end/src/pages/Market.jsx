export default function Market() {
  const marketData=[
    { crop: "Maize", price: "2,500 ETB / quintal", location: "Oromia" },
    { crop: "Teff", price: "6,800 ETB / quintal", location: "Amhara" },
    { crop: "Wheat", price: "4,200 ETB / quintal", location: "Tigray" },
    { crop: "Barley", price: "3,900 ETB / quintal", location: "SNNPR" },
  ]
  return (
    <div className="market">
      <h1 className="market-title">Market Prices</h1>
      <p className="market-description">
        Browse current agricultural market prices from different regions.
      </p>

      <table className="market-table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Price</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((item, index) => (
            <tr key={index}>
              <td>{item.crop}</td>
              <td>{item.price}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}