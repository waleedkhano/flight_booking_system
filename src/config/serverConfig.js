const dotenv = require('dotenv');
dotenv.config({ quiet: true });

module.exports = {
    PORT: process.env.PORT || 3000
};