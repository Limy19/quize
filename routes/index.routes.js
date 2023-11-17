const router = require('express').Router();

const rega = require('./rega.routes');
const question = require('./question.routes');
const category = require('./category.routes');

router.use('/', rega);
router.use('/category', category);
router.use('/questions', question);

module.exports = router;
