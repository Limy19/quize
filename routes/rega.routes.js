const router = require('express').Router();

const { User } = require('../db/models');

const Rega = require('../components/Rega');

router.get('/', (req, res) => {
  const html = res.renderComponent(Rega, {
    title: 'Rega',
  });
  res.send(html);
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const user = await User.create({ name, score: 0 });
      res.app.locals.user = user;
      res.redirect('/category');
    } else {
      res.status(400).send('заполните все поля');
    }
  } catch ({ message }) {
    console.log(message);
    res.status(500).end();
  }
});

module.exports = router;
