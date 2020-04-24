
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
        './src/index.js',
        './src/store.js',
        './reducers/reducer.js',
        './src/components/app/app.js',
        './src/styles.css',
        './public/index.html',
        './src/components/autorisation/autorisation.js',
        './src/components/autorisation/autorisation-saga.js',
        './src/components/header/header.js',
        './sagas/saga.js',
        './src/components/search-city-panel/searchCityPanel.js',
        './src/components/weathers/one-day-week/oneDayWeek.js',
        './src/components/weathers/weather-today/weather-today.js',
        './src/components/weathers/weather-week/weather-week.js',
        './src/components/partners/partners.js',
        './src/components/partners/partner1/partner1.js',
        './src/components/partners/partner1/home/home.js',
        './src/components/partners/partner1/apartaments/apartaments.js',
        './src/components/partners/partner1/contacts/contacts.js',
        './src/components/partners/partner1/calculator/calculator.js',
        './src/components/partners/partner1/calculator/cost-calculation/cost-calculation.js',
        './src/components/partners/partner1/calculator/finaly-result-cash/finaly-result-cash.js',
        './src/components/partners/partner1/gallery/gallery.js',
        './src/components/partners/partner2/partner2.js',
        './src/components/partners/partner3/partner3.js',
        './src/components/partners/partner3/messanger/messanger.js',
        './src/components/partners/partner3/users-list/users-list.js',
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {

    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ]
};