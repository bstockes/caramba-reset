
import { useState } from 'react';

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    fitment: '',
    image: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImage = e => {
    setProduct(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Product submitted:', product);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Add New Product</h2>
      {submitted ? (
        <div>
          <p>✅ Product submitted successfully (mock)</p>
          <pre>{JSON.stringify(product, null, 2)}</pre>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input name="name" placeholder="Product Name" onChange={handleChange} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} />
          <input name="price" type="text" placeholder="Price (e.g., 49.99)" onChange={handleChange} required />
          <input name="fitment" placeholder="Fitment (e.g., 2021 VW Tiguan)" onChange={handleChange} required />
          <input name="image" type="file" onChange={handleImage} />
          <button type="submit">Submit Product</button>
        </form>
      )}
    </div>
  );
}
