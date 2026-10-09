class EnvironmentalData {
  constructor(temperature, humidity, windSpeed, daysSinceRain) {
    this.temperature = temperature;     // float
    this.humidity = humidity;           // float
    this.windSpeed = windSpeed;         // float
    this.daysSinceRain = daysSinceRain; // int
  }

  // getTemperature(): float
  getTemperature() {}

  // getHumidity(): float
  getHumidity() {}

  // getWindSpeed(): float
  getWindSpeed() {}

  // getDaysSinceRain(): int
  getDaysSinceRain() {}
}

module.exports = EnvironmentalData;
