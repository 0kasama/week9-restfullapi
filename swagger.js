const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Week 9 - Restfull API and Middlewares",
      version: "1.0.0",
      description: "CRUD Tables of Movies and Users with Auth",
    },
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        description: "JWT authorization token",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
