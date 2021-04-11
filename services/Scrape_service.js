const rp = require('request-promise');
const $ = require('cheerio');

exports.scrapeData = (url, result) => {
    rp(url)
        .then(function (html) {
            //Data scrape part
            var product_name = $('.wt-text-body-03.wt-line-height-tight.wt-break-word.wt-mb-xs-1', html).text().trim();
            var product_image = $('img.wt-max-width-full.wt-horizontal-center.wt-vertical-center.carousel-image.wt-rounded',html).attr('src');
            var product_price = $('.wt-text-title-03.wt-mr-xs-2', html).text().trim();
            result(null, {
                "name": product_name,
                "image" : product_image,
                "price": product_price
            });
        })
        .catch(function (err) {
            result(err, null);
        });
}