const layout = require('../admin/layouts');
const products = require('../products/index');

module.exports = ({ content, product }) => {
  return layout({
    content: `
        <body>
          <header class="container">
            <nav class="navbar navbar-bottom">
              <div class="container navbar-container">
                <div class="navbar-item">
                  <div class="navbar-buttons">
                    <div class="navbar-item">
                      <a href="/products"><i class="fa fa-star"></i> Products</a>
                    </div>
                    <div class="navbar-item">
                      <a href="/cart"><i class="fa fa-shopping-cart"></i> Cart</a>
                    </div>
                  </div>
                </div>
                <div class="navbar level">
                  <div class="level-right">
                    <div class="navbar-item">
                      <a href="/signin"><i class="fa fa-user"></i> Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>  
          <section class="banner">
            <div class="container">
              <div class="columns is-centered">
                <img src="/images/banner.jpg" />
              </div>
            </div>
          </section>
        </body>
      `

  })


};