exports.resolvers = {
  Query: {
    getAllReservations: async (root, args, { Reservation }) => {
      return await Reservation.find()
    },
    getReservation: async (root, { _id }, { Reservation }) => await Reservation.findOne({ _id })
  },

  Mutation: {
    addReservation: async (root, { name, hotelName, arrivalDate, departureDate }, { Reservation }) => {
      const newReservation = await new Reservation({
        name,
        hotelName,
        arrivalDate,
        departureDate
      }).save();

      return newReservation;
    }
  }
}