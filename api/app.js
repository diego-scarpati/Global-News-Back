const express = require("express");
if (process.env.NODE_ENV !== "production"){
  require("dotenv").config()
}
const volleyball = require("volleyball");
const cors = require("cors");
const db = require("./db/index")
const models = require("./models")
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3001


const app = express();
const indexRouter = require("./routes/index");


app.use(cookieParser());
app.use(cors());
app.use(volleyball);
app.use(express.json());

app.use("/api", indexRouter);

db.sync({ force: false}).then(() => {
  app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
  });
});