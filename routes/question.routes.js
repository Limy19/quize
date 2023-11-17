const router = require('express').Router();

const QuestionCard = require('../components/Question');
const { Question, User } = require('../db/models');

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

router.post('/category', async (req, res) => {
  const { id, answer } = req.body;
  if (res.app.locals.user) {
    const user = await User.findOne({ where: { id: res.app.locals.user.id } });
    const a = await Question.findOne({ where: { id } });
    if (answer.toLowerCase().trim() === a.answer.toLowerCase()) {
      user.score += 100;
      await user.save();
      res.app.locals.user.score = user.score;
      res.json({ message: 'Верно!' });
    } else {
      user.score -= 100;
      await user.save();
      res.app.locals.user.score = user.score;
      res.json({ message: 'Пупупу!' });
    }
  }
});

module.exports = router;
