const scrape = require('website-scraper');

let options = {
    urls: ['https://www.ezeereservation.com/demo/'],
    directory: './hotel_demo_homepage',
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});

