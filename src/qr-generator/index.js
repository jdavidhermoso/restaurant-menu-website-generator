const QRCode = require('qrcode')
const restaurantData = require("../../restaurant.json");
const theme = restaurantData.theme || 'default';

QRCode.toFile('qr.png', restaurantData.url, {
    color: {
        dark: '#000',  // Blue dots
        light: '#0000' // Transparent background
    }
}, function (err) {
    if (err) throw err
    console.log('done')
})