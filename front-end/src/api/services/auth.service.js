

export const authService = {
  login: async ({ email, password }) => {
    // TEMP: fake users for integration testing
    if (email === "admin@test.com") {
      return { user: { name: "Admin", role: "admin" }, token: "admin-token" };
    }

    if (email === "farmer@test.com") {
      return { user: { name: "Farmer", role: "farmer" }, token: "farmer-token" };
    }

    if (email === "buyer@test.com") {
      return { user: { name: "Buyer", role: "buyer" }, token: "buyer-token" };
    }

    throw new Error("Invalid credentials");
  },

  logout: async () => {
    return true;
  }
};
