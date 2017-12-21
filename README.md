# Aggreg8

*Real Time News, Just For You*

Created by [Sarah Katz](https://github.com/SarahLKatz/).

Bootstrapped with [Fullstack Academy](https://github.com/FullstackAcademy)'s Boilermaker. I used Boilermaker for several projects while at Fullstack, and found it to be a great quick sarting point

## Running This App
* Fork this repo
* Clone the repo to your local machine, using the CLI or your favorite GUI
* Run `npm install` or `yarn install` - whichever floats your boat
* Create a postgres database named `aggreg8`
* Create a file called `secrets.js`. Create the following variable:
  * `process.env.NYT_API` - this will be your New York Times API key [Click here to get an API key from NYTimes](https://developer.nytimes.com/)
* To start the app in a development environment, run `npm run start-dev`
* If you've already bundled (using `npm run build`), you can run the app using `npm start`

## Testing This App
* Create a postgres database named `aggreg8_test`
* Run `npm test`

## Future Features
* Include date story was published
* Allow users to filter by keyword
* Add additional news sources (including Twiter, Google News, and others)
* Allow users to filter by news source

Enjoy!
