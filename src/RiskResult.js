class RiskResult {
  constructor(riskValue, riskCategory) {
    this.riskValue = riskValue;       // float
    this.riskCategory = riskCategory; // string
  }

  // getRiskValue(): float
  getRiskValue() {}

  // getRiskCategory(): string
  getRiskCategory() {}
}

module.exports = RiskResult;
