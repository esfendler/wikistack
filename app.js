const express = require("express")
const morgan = require("morgan")
const layout = require("./views/layout")
const { db } = require('./models');
const models = require('./models');

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static('public'))



app.get("/", (req, res) => {
  res.send(layout(""))
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 3000

const init = async () => {
  await models.db.sync()
  server.listen(PORT, () => {
    console.log(`server listening in port ${PORT}`)
  });
}

init();








