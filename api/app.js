const express = require("express");
const volleyball = require("volleyball");
const cors = require("cors");
const db = require("./db/index")
const models = require("./models")

const indexRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(volleyball);
app.use(express.json());

app.use("/api", indexRouter);

db.sync({force: false}).then(() => {
    app.listen(3001,()=>{
        console.log("servidor escuchando en el puerto 3001")
    })
})