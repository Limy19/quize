const router = require('express').Router();

const { log } = require('console');
const QuestionCard = require('../components/Question');
const { Question } = require('../db/models');

router.get('/:index/category/:idCategory', async (req, res) => {
  try {
    const { idCategory, index } = req.params;
    const questions = await Question.findAll({
      where: { categoryId: idCategory },
    });
    if (+index < questions.length) {
      const html = res.renderComponent(QuestionCard, {
        title: 'question',
        question: questions[index],
        index: Number(index) + 1,
      });
      res.status(200).send(html);
    } else {
      res.redirect('/category');
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});
router.post('/:index/category/:idCategory', (req, res) => {
  const { answer } = req.body;
  if (answer) {
  }
});

module.exports = router;
