let listings = [];

export const listingsApi = {
  getAll() {
    return Promise.resolve(listings);
  },

  create(listing) {
    listings.push(listing);
    return Promise.resolve(listing);
  },

  updateStatus(id, status) {
    listings = listings.map(l =>
      l.id === id ? { ...l, status } : l
    );
    return Promise.resolve();
  }
};
