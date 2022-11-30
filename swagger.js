const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
/**Swagger initialization -START */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "posts",
      description: "API documentation",
      contact: {
        name: "developer langat",
      },

      servers: ["http://localhost:3000/"],
    },
    basePath: "/",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["index.js", "./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.info(`Docs available at http://localhost:${port}/docs`);
}
/**Swagger initialization -END */

module.exports = swaggerDocs;
