const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
require('dotenv').config({ path: '.variables.env' });
const Reservation = require('./models/reservation')

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));


const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');


const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

// create schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Create graphiql application
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/graphql', bodyParser.json(), graphqlExpress(() => ({
  schema,
  context: {
    Reservation,
  }
})));


const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
