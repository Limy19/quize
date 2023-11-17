const router = require('express').Router();
// const Categoryform = require('../components/Category');
const CategoryList = require('../components/CategoryList');
const { CategoryQuestion } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await CategoryQuestion.findAll();
    const html = res.renderComponent(CategoryList, {
      title: 'Category',
      categories,
    });
   
    res.status(200).send(html);
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});


module.exports = router;
