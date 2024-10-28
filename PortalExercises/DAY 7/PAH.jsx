
import React, { useEffect, useState } from 'react';

const Cards = ({ title, price, description }) => {
  return (
    <div style={{ height: 'fit-content', width: '100%', padding: 20, marginInline: 40,marginTop:10,marginBottom:10, border: '1px solid #ddd', borderRadius: 5 }}>
      <p><strong>ProductName:</strong> {title}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Price:</strong> {price}</p>
    </div>
  );
};

const Day7pah1 = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, []);

  return (
    <section style={{ height: '100vh', width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'row' }}>
      {loading ? <p>Loading...</p> : product.map((val, i) => (
        <Cards
          key={i}
          title={val.title}
          description={val.description}
          price={val.price}
        />
      ))}
    </section>
  );
};

export default Day7pah1;
