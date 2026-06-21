import { Link } from 'react-router-dom';

function Header({cartCount}) {
  return (
    <header>
      <h1>Key Shop</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>🛒Cart({cartCount})</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;