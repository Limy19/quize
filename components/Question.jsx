const React = require('react');

const Layout = require('./Layout');

function Question({ question, index }) {
  return (
    <div>
      {/* <img scr={category.image} /> */}
      <div>{question.question}</div>
      <input name="answer" placeholder="Ваш ответ" />
      <a href={`/questions/${index}/category/${question.categoryId}`}>{'->'}</a>
    </div>
  );
}
module.exports = Question;
