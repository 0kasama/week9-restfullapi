const express = require("express");
const morgan = require("morgan")
const app = express();

const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger.js");

const port = 3000;

app.use(express.json());
app.use(morgan("tiny"))

const movies = require("./routes/movies-route.js");
const users = require("./routes/users-route.js");
const auth = require("./routes/auth-route.js");

app.use(movies);
app.use(users);
app.use(auth);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
