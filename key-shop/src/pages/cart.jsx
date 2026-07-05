import {Link} from 'react-router-dom';
 

function cart({cartItems}){
   
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if(cartItems.Length == 0){
    return(
      <section className="cartPage emptyCart"> 
      <h1> Your cart is empty</h1>
      <p>You have not added any keychain yet!</p>

      <Link to="/" className="continueShoppingBtn">Continue Shopping </Link>
      </section>

    )
  }

 return(
  <section>
    <h1>Under Process</h1>
  </section>
 )

}

export default cart;