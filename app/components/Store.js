'use client';

import { useState, useEffect } from 'react';

export default function Store() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => console.error("Error fetching data: ", err));
  }, []); 

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Product Store</h3>
      
      <input
        type="text"
        placeholder="Search for a product..."
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        onChange={e => setSearchTerm(e.target.value)}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>Title</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Price</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '8px' }}>{product.title}</td>
              <td style={{ padding: '8px' }}>${product.price}</td>
              <td style={{ padding: '8px' }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
