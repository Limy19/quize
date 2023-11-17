const React = require('react');

const Layout = require('./Layout');

function Category({ category }) {
  return (
    <div>
      {/* <img scr={category.image} /> */}
      <div>

        <img className = 'ccccc'src={category.url} />

        <a className="a" href={`/questions/0/category/${category.id}`}>
          {category.title}
        </a>
      </div>
    </div>
  );
}
module.exports = Category;
