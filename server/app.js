const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const { mongoose } = require("mongoose");
require("dotenv").config();

const PORT = 8000;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server heard at http://localhost:${PORT}`);

  mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Connected to database");
  });
});
