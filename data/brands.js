var re = /shop/;

module.exports = {
    OSM: { replace: ['OpenStreetMap'] },
    'Open Street Map': { replace: ['OpenStreetMap'] },
    'Open Street Maps': { replace: ['OpenStreetMap'] },
    TIF: { replace: ['TIFF'] },
   shopify: { cased: true, note: ['test note'], replace: ['Shopify'] }
};
