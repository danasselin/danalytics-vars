# danalytics-vars

## To use

1. `npm install`

2. Use the `examples` directory to experiment

  * run `npm run snapshot-to-json lat-homepage http://www.latimes.com/`

  Nightmarejs will run, capture the Adobe network request and save to the path specified in `.var_matcher_config.json`

  * run `npm run compare-snapshot lat-homepage`

  * danalytics-vars uses `lat-homepage` to make another request and compare it to what you already have stored
