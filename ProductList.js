import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useState } from "react";

export default function ProductList() {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Products</h2>
      <input
        placeholder="Search products"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <table border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Category</th>
            <th>Expiry Date</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.expiryDate}</td>
              <td>${product.cost}</td>
              <td>
                <button onClick={() => dispatch(addToCart(product.id))}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
