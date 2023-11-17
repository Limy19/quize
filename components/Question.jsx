const React = require('react');

const Layout = require('./Layout');

function Question({ question, index, title }) {
  return (
    <Layout title={title}>
      <div>
        {/* <img scr={category.image} /> */}
        <div>{question.question}</div>
        <form className="answer">
          <input name="answer" placeholder="Ваш ответ" />
          <button className='' type="submit">ответить</button>
        </form>
        <a className='aq' href={`/questions/${index}/category/${question.categoryId}`}>
          {'->'}
        </a>
      </div>
    </Layout>
  );
}
module.exports = Question;
