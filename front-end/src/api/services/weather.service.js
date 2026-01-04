export const getWeatherData = async () => {
  return Promise.resolve([
    {
      day: "Today",
      condition: "Sunny",
      temperature: "26°C",
      advice: "Good for planting and field work.",
    },
    {
      day: "Tomorrow",
      condition: "Rainy",
      temperature: "22°C",
      advice: "Avoid harvesting. Protect crops.",
    },
  ]);
};
