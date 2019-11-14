const express = require("express")
const morgan = require("morgan")
const layout = require("./views/layout")
const { db } = require('./models');
//const  db  = require('./models');
const models = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

const path = require('path')


const app = express()


app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static('public'))

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);


app.get("/", (req, res) => {
  res.redirect('/wiki')
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

models.db.sync({force: true})
const PORT = 3000

const init = async () => {
  await models.db.sync()
  app.listen(PORT, () => {
    console.log(`server listening in port ${PORT}`)
  });
}

init();








