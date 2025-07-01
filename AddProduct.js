import { useDispatch } from "react-redux";
import { addProduct } from "../features/productsSlice";
import { useState } from "react";

export default function AddProduct() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cost, setCost] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addProduct({
        id: Date.now(),
        name,
        category,
        expiryDate,
        cost
      })
    );
    setName("");
    setCategory("");
    setExpiryDate("");
    setCost(0);
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <input
          type="date"
          value={expiryDate}
          onChange={e => setExpiryDate(e.target.value)}
        />
        <input
          type="number"
          value={cost}
          onChange={e => setCost(Number(e.target.value))}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
