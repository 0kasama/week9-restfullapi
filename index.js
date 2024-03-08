const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger.js");
const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
