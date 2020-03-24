
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
        './sagas/saga.js'
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