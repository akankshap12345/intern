import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <nav>
      <Link to="/products">Products</Link> |{" "}
      <Link to="/add-product">Add Product</Link> |{" "}
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
}
