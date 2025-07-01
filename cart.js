import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const items = cartItems.map(id =>
    products.find(product => product.id === id)
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.cost}
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
