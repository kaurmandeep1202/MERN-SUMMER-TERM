function Products() {
  return (
    //add same like home but with different product grid, product card, img, h1, p, h4 price and button add to cart 
    <div className = "page">
      <section className="products">
        <h1>Our Products</h1>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h2>Leather Key Ring</h2> 
            <p>Stylish and durable leather key ring.</p>
            <h4>$19.99</h4>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h2>Custom Key Ring</h2>
            <p>Personalized key ring with your name or initials.</p>  
            <h4>$24.99</h4>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h2>Metal Key Ring</h2>
            <p>Durable metal key ring with a sleek design.</p>
            <h4>$14.99</h4>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;