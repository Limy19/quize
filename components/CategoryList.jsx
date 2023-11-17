const React = require('react');
const Category = require('./Category');
const Layout = require('./Layout');
const { EOL } = require('os');

function CategoryList({ title, categories, user }) {
  return (
    <Layout title={title}>
      <div>{`Hello,${user.name}!  Let's go! Score:${user.score}`}</div>
      <div>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </Layout>
  );
}
module.exports = CategoryList;
