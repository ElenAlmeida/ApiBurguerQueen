const express = require("express");
const app = express();
const db = require("./models/index");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.listen(4560, console.log("Servidor rodando"));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use("/user", require("./routes/user"))
app.use("/order", require("./routes/orders"))
app.use("/product", require("./routes/products"))

db.sequelize.sync();