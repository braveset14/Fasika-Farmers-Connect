import { useEffect, useState } from "react";
import { listingsApi } from "../api/services/listings.service";

export function useListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    listingsApi.getAll().then(setListings);
  }, []);

  const addListing = async (listing) => {
    await listingsApi.create(listing);
    setListings(prev => [...prev, listing]);
  };

  const markAsSold = async (id) => {
    await listingsApi.updateStatus(id, "sold");
    setListings(prev =>
      prev.map(l =>
        l.id === id ? { ...l, status: "sold" } : l
      )
    );
  };

  return {
    listings,
    addListing,
    markAsSold
  };
}
