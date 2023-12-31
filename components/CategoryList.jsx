const React = require('react');
const Category = require('./Category');
const Layout = require('./Layout');
const { EOL } = require('os');

function CategoryList({ title, categories, user }) {
  return (
    <Layout title={title}>
      <div className='nameDiv'>
        <div className='NameScore'><p>{`Hello,${user.name}!  Let's go! Score:${user.score}`}</p></div>
      <div className='categ'>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
      </div>
    </Layout>
  );
}



module.exports = CategoryList;
