import { useListings } from "../../hooks/useListings";

export default function FarmerProductListing() {
  const { listings, addListing, markAsSold } = useListings();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const newListing = {
      id: Date.now(),
      product: form.product.value,
      quantity: form.quantity.value,
      unit: form.unit.value,
      price: form.price.value,
      status: "active",
    };

    addListing(newListing);
    form.reset();
  };

  return (
    <div className="sell-product">
      <h2>Sell Product</h2>

      <form onSubmit={handleSubmit} className="listing-form">
        <input name="product" placeholder="Crop name" required />
        <input name="quantity" type="number" placeholder="Quantity" required />
        <select name="unit">
          <option>Kg</option>
          <option>Quintal</option>
        </select>
        <input name="price" type="number" placeholder="Price (ETB)" required />
        <button type="submit">Create Listing</button>
      </form>

      <h3>My Listings</h3>

      {listings.map(item => (
        <div key={item.id} className="listing-card">
          <span>
            {item.product} — {item.quantity} {item.unit} — {item.price} ETB
          </span>
          <span>  {item.status}</span>

          {item.status === "active" && (
            <button onClick={() => {
              markAsSold(item.id);
              }}>
              Mark as Sold
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
