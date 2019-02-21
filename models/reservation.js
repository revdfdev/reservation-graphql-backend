const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReservationSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  hotelName: {
    type: String,
    required: true,
  },

  arrivalDate: {
    type: String,
    required: true,
  },

  departureDate: {
    type: String,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Reservation', ReservationSchema);