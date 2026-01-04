export const getAdvisories = async () => {
  return Promise.resolve([
    {
      title: "Soil Preparation",
      description: "Plow early and remove weeds to improve soil fertility.",
    },
    {
      title: "Pest Control",
      description: "Use pesticides responsibly and only when necessary.",
    },
  ]);
};
