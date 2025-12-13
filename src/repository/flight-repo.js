const { Flights } = require('../models/index');

class FlightRepository {
    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.error('Something went wrong in the repository layer', error);
            throw {error};
        }
    }
}

module.exports = FlightRepository;