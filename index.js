const express = require("express");
const usersRoutes = require("./routes/index");
const swaggerDocs = require("./swagger");
const app = express();
app.use(express.json());

app.use("/api", usersRoutes);
app.get("/", (req, res) => {
  res.send("Server has started...");
});
const port = 3000;

app.listen(port, () => {
  console.log(`posts app listening at http://localhost:${port}`);
  swaggerDocs(app, port);
});
