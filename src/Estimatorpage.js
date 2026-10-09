class EstimatorPage {
  constructor(pageTitle, isLoaded, loadTimeMs, summary) { 
  this.pageTitle = pageTitle; //String
  this.isLoaded = isLoaded; //boolean
  this.loadTimeMs = loadTimeMs //int
  this.summary = summary //SummarySection

  } 

  //load(): void 
  load() {}

  //isAvailable(): boolean
  isAvailable() {}

  //getLoadTimeMs(): int
  getLoadTimeMs() {}

}

module.exports = EstimatorPage; 
  
