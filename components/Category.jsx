const React = require('react');

const Layout = require('./Layout');

function Category({ category }) {
  return (
    <div>
      {/* <img scr={category.image} /> */}
      <div>

        <img src="category.image" />
        <a className='a href={`/questions/0/category/${category.id}`}>{category.title}</a>



      </div>
    </div>
    
  );
}
module.exports = Category;
