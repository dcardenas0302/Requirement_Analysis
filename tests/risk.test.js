const calculateRisk = require("../risk.js");

test("REQ-6: risk is calculated and stays within 0-100", () => {
  const risk = calculateRisk(30, 20, 10, 5);
  expect(risk).toBeGreaterThanOrEqual(0);
  expect(risk).toBeLessThanOrEqual(100);
});