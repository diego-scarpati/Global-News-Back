const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
const db = require("./db/index");
const cookieParser = require("cookie-parser");

const app = express();
const indexRouter = require("./routes/index");


app.use(cookieParser());
app.use(cors());
app.use(volleyball);
app.use(express.json());

app.use("/api", indexRouter);

app.use((req, res, next)=>{
  console.log("req del middle app.js", req)
})

db.sync({ force: false }).then(() => {
  app.listen(3001, () => {
    console.log("servidor escuchando en el puerto 3001");
  });
});