exports.typeDefs = `
  type Reservation {
    _id: ID
    name: String!
    hotelName: String!
    arrivalDate: String!
    departureDate: String!
    createdDate: String
  }

  type Query {
    getAllReservations: [Reservation]
    getReservation(_id: ID!): Reservation
  }


  type Mutation {
    addReservation(name: String!, hotelName: String!, arrivalDate: String!, departureDate: String!): Reservation
  }
` 

