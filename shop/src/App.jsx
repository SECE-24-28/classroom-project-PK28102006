import Header from './header/header-component';
import ShopNow from './shop_now/shop-now-component';
import Categories from './categories/categories-component';
import Features from './features/features-component';
import Trending from './trending/trending-component';
import Footer from './footer/footer-component';

function App() {
  return (
    <div>
      <Header />
      <ShopNow />
      <Categories />
      <Features />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
