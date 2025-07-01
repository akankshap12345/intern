import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
