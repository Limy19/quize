const React = require('react');
const Question = require('./Question');
const Layout = require('./Layout');

function QuestionList({ title,questions  }) {
  return (
    <Layout title={title}>
      <div>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = QuestionList;
