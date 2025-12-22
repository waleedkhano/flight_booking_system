const { ClientErrorsCodes } = require('../utils/error_codes');

const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.departureTime ||
    !req.body.arrivalTime ||
    !req.body.price
  ) {
    return res.status(ClientErrorsCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "All fields are required to create a flight.",
      err: "Missing required flight information.",
    });
  }
  next();
};



module.exports = {
  validateCreateFlight,
};