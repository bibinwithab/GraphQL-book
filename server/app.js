const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const { mongoose } = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());
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
