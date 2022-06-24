const express = require("express");
const { User, sequelize } = require("./models");
const routes = require("./routes/ormRoutes.js").routes;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("The app is running.");
});

routes(app);

app.listen({ port: 5000 }, async () => {
  await sequelize.authenticate({alter:true});
});
