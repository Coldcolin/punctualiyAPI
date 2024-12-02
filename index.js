require('./dbConfig/dbConfig.js');
const express = require('express');
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerDoc = require("swagger-ui-express")
const swaggerDocumentation = require("./docs/documentation.js")
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const fileUpload = require("express-fileupload");
const router = require('./router/userRouter.js');

const app = express();

const port = process.env.PORT;

app.use(cors('*'));

app.use(fileUpload({
    useTempFiles: true,
    limits:{ fileSize: 5 * 1024 * 1024 }
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Students App API's",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:4400",
          description: 'Development server'
        },
      ],
    },
    apis: ["./router/*.js"],
  };

  const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerDoc.serve,
  swaggerDoc.setup(specs, { explorer: true })
);


app.get('/', (req, res) => {
    res.send("Welcome to the USerData API");
})
app.use('/api/v1', router);


app.listen(port, () => {
    console.log(`Server up and running on port: ${port}`);
})