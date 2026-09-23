function calculateRisk(temp, humidity, wind, daysSinceRain) {
  return Math.min(100, Math.round((100 - humidity) * 0.4 + wind * 1.5 + daysSinceRain * 2));
}
if (typeof module !== "undefined") {
  module.exports = calculateRisk;
}
