const React = require('react');

const Layout = require('./Layout');

function getRega({ title }) {
  return (
    <Layout title={title}>
      <div>
        <form action="/" className="regaForm" method="POST">
          <input className='RegaInput' name="name" placeholder="name" />
          <button className='RegaButton' type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </Layout>
  );
}
module.exports = getRega;
