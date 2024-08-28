import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './Components/mainContent';
import NavBar from './Components/navBar';
import Footer from './Components/Footer';
import CategoryMenu from './Components/CategoryMenu';
import CategoryPAge from './Components/CategoryPAge';
import ProductPage from './Components/Productpage';
// import products from './Components/productsdata';
// import categories from './Components/CategoryData';
import { CartProvider } from './Components/CartFunctions';
import CartPage from './Components/CartPage';
import { About } from './Components/About';
import { Services } from './Components/Services';
import { Contact } from './Components/Contact';

function App() {
  return (
    <CartProvider>
    <Router>
      <NavBar />
      <Routes>
      <Route path='/'element={<MainContent />}/>
      <Route path="/cart" element={<CartPage />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact' element={<Contact/>}/>
        {/* <Route path="/" element={<CategoryMenu categories={categories} products={products} />} /> */}
        <Route path="/category/:categoryId" element={<CategoryPAge />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
    </CartProvider>
  );
}
export default App;