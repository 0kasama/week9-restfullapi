const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger.js");
const morgan = require("morgan")
const port = 3000;

app.use(express.json());
app.use(morgan("tiny"))

const movies = require("./docs/movies-api.js");
const users = require("./docs/users-api.js");
const auth = require("./docs/auth-api.js");
const {authentication} = require("./middlewares/auth-mid.js")

app.use(movies);
app.use(users);
app.use(auth);
app.use(authentication);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
