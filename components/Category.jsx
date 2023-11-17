const React = require('react');

const Layout = require('./Layout');

function Category({ category }) {
  return (
    <div>
      {/* <img scr={category.image} /> */}
      <div>
        <a className='Categorylist' href={`/questions/0/category/${category.id}`}>{category.title}</a>
      </div>
    </div>
  );
}
module.exports = Category;
