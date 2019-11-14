
const router = require('express').Router()
const addPage = require('../views/addPage')

const {Page}  = require('../models');




// router.get("/", (req, res) => {
//   res.send()
// })

router.post('/', async (req, res, next) => {

  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`

  const page = new Page({
    title: addPage.title,
    content: addPage.content
  });

  // make sure we only redirect *after* our save is complete!
  // note: `.save` returns a promise.
  try {
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
  res.send(addPage())
})

module.exports = router;


function theFunc (title) {
  title.replace(/\s+/g,"_").replace(/\W/g, '')
}
