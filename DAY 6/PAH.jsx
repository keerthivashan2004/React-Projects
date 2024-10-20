
import React, { useState, useEffect, createContext, useContext } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setCategories(['Electronics', 'Clothing', 'Accessories', 'Home Appliances']);
    }, 1000);

    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Laptop', category: 'Electronics', price: 900 },
        { id: 2, name: 'T-shirt', category: 'Clothing', price: 20 },
        { id: 3, name: 'Headphones', category: 'Accessories', price: 100 },
        { id: 4, name: 'Refrigerator', category: 'Home Appliances', price: 700 },
        { id: 5, name: 'Sneakers', category: 'Clothing', price: 50 },
        { id: 6, name: 'Smartphone', category: 'Electronics', price: 800 },
        { id: 7, name: 'Blender', category: 'Home Appliances', price: 150 },
        { id: 8, name: 'Watch', category: 'Accessories', price: 200 },
        { id: 9, name: 'Jeans', category: 'Clothing', price: 40 },
        { id: 10, name: 'TV', category: 'Electronics', price: 1200 },
        { id: 11, name: 'Air Conditioner', category: 'Home Appliances', price: 500 },
        { id: 12, name: 'Sunglasses', category: 'Accessories', price: 70 },
        { id: 13, name: 'Jacket', category: 'Clothing', price: 100 },
        { id: 14, name: 'Gaming Console', category: 'Electronics', price: 400 },
        { id: 15, name: 'Vacuum Cleaner', category: 'Home Appliances', price: 250 },
        { id: 16, name: 'Necklace', category: 'Accessories', price: 300 },
        { id: 17, name: 'Microwave Oven', category: 'Home Appliances', price: 200 },
        { id: 18, name: 'Running Shoes', category: 'Clothing', price: 120 },
        { id: 19, name: 'Bluetooth Speaker', category: 'Accessories', price: 60 },
        { id: 20, name: 'Tablet', category: 'Electronics', price: 350 }
      ]);
    }, 1000);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  return (
    <ProductContext.Provider
      value={{
        categories,
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProducts = () => useContext(ProductContext);

const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useProducts();

  return (
    <div>
      <h2>Filter by Category</h2>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

const PriceFilter = () => {
  const { priceRange, setPriceRange } = useProducts();

  const handlePriceChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = Number(value);
    setPriceRange(newRange);
  };

  return (
    <div>
      <h2>Filter by Price</h2>
      <label>
        Min Price: $
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(0, e.target.value)}
        />
      </label>
      <label>
        Max Price: $
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(1, e.target.value)}
        />
      </label>
    </div>
  );
};

const ProductList = () => {
  const { filteredProducts } = useProducts();

  return (
    <div>
      <h2>Products</h2>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price} ({product.category})
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

const Day6pah1 = () => {
  return (
    <ProductProvider>
      <div style={{ padding: '20px' }}>
        <CategoryFilter />
        <PriceFilter />
        <ProductList />
      </div>
    </ProductProvider>
  );
};

export default Day6pah1;
