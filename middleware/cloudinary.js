const cloudinary = require("cloudinary").v2

require("dotenv").config()

// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

cloudinary.config({ 
    cloud_name: 'dw926cl8d',
    api_key: '449628339752179', 
    api_secret: 'Ud-ZQsiQm6zWVPnL3LUlcx6t4nI', 
    secure: true 
  });

module.exports = cloudinary;