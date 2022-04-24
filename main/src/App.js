import './App.css';
import Header from './Header.js';
import Products from './Products.js'
import Trend from './Trend.js';
import Footer from './Footer.js';
import productsItem  from './mock/products.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Trend />
      <Footer />
    </div>
  );
}

export default App;
