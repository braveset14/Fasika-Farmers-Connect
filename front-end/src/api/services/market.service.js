export const getMarketData = async () => {
  return Promise.resolve([
    { crop: "Maize", price: "2,500 ETB / quintal", region: "Oromia" },
    { crop: "Teff", price: "6,800 ETB / quintal", region: "Amhara" },
    { crop: "Wheat", price: "4,200 ETB / quintal", region: "Tigray" },
  ]);
};