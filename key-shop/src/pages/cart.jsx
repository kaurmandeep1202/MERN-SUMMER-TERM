import {Link} from 'react-router-dom';
import { useState } from "react";
 

function cart({cartItems,
           increaseQuantity, 
           decreaseQuantity, 
           clearCart,
           removeItem,
          }) {
   
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((total,item) => total + item.quantity ,0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showItemConfirmation, setShowItemConfirmation] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  // LOGIN STATES
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [loginError, setLoginError] = useState({});
  const [loginMessage, setLoginMessage] = useState('');

  const handleLoginInput = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
        ...prevData,
        [name]: value,
    }));

    setLoginError(prevError => ({
       ...prevError,
       [name]: ''
    })
  );

   setLoginMessage('');
};

   const validateLogin = () => {
    const errors = {};

    if (!loginData.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
        errors.email = "Please enter a valid email address";
    }

    if (!loginData.password) {
        errors.password = "Password is required";
    }
    else if (loginData.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
}

    return errors;
};

  const handleLogin = (e) => {
    e.preventDefault();
    const errors = validateLogin();
    if (Object.keys(errors).length > 0) {
        setLoginError(errors);
        return;
    }
 
  
 setIsLogin(true);
 setLoggedInUser(loginData.email);
 setLoginMessage("Login Successful");

 setShowLogin(false);
 handleCheckOut();

};
   
 const handleCheckOut = () => {
  if(!isLogin){
    setShowLogin(true);
    return;
  }
    alert("Checkout Started Successfully!!");
};





  if(cartItems.length === 0){
    return(
      <section className="cartPage emptyCart"> 
      <h1> Your cart is empty</h1>
      <p>You have not added any keychain yet!</p>

      <Link to="/" className="continueShoppingBtn">Continue Shopping </Link>
      </section>

    )
  }

  //  const handleClearCart = () => {
  //   const confirmClear = window.confirm("Are you sure you want to clear the cart");

  //   if(confirmClear){
  //     clearCart();
  //   }
  //  }

    
      const handleDecreaseQuantity = (item) => {
  if (item.quantity === 1) {
    setSelectedItem(item);
    setShowItemConfirmation(true);
  }
  else{
    decreaseQuantity(item.id);
     setShowItemConfirmation(false);

  }
};

   


 return(
  <section className="cartPage">
    <div className="cartHeading">
      <h1> Your Shopping cart</h1>

       <button
  className="clearCartBtn"
  onClick={() => setShowConfirmation(true)}
>
      Clear Cart
    </button>
    </div>

    <div className="cartLayout">
      
      <div className="cartItems">
        {
          cartItems.map((item)=> (
          <div className="cartItem" key={item.id}>
            <img src={item.image} alt={item.name}></img>
            <div className="cartItemDetails">
              <h3> {item.name}</h3>
              <p>${item.price} each</p>
   
            <div className="quantityBox">
              <button onClick = {() => handleDecreaseQuantity(item)}> - </button>
              <span>{item.quantity}</span>
              <button onClick = {() => increaseQuantity(item.id)}> + </button>

            </div>
          </div>  
 
          <div className="cartItemRight">
            <strong> ${item.price * item.quantity}</strong>
            <button
                className="removeBtn"
                 onClick={() => removeItem(item.id)}
>
                     Remove
                    </button>
          </div>   
        



        </div>
           ))
        }


        
      </div>
     

     <div className="cartSummary">
      <h2> Order Summary</h2>

      <div className="summaryRow">
        <span> Total Items</span>
        <strong> 
          {/* {cartItems.length} -- we have created total items at above  */} 
          {totalItems}
        </strong>
      </div>

      <div className="summaryRow totalRow">
        <span> Total Amount</span>
        <strong> ${totalAmount}</strong>
      </div>    

       <button className="checkOutBtn" onClick={handleCheckOut}>
    {isLogin ? "Proceed to Checkout" : "Login to Checkout"}
</button>
        <Link to="/" className="continueLink">Continue Shopping </Link>
    </div>  

  
     


    </div>  

{/* confirmation for all items clearing  */}
     {showConfirmation && (
  <div className="modal">
    <div className="modalContent">

      <h3>Clear Cart</h3>
      <p>Are you sure you want to remove all items?</p>

      <button
        onClick={() => {
          clearCart();
          setShowConfirmation(false);
        }}
      >
        Yes
      </button>

      <button onClick={() => setShowConfirmation(false)}>
        No
      </button>
    </div>
  </div>
)}
     
     {/* confirmation cart for specific item */}
        {showItemConfirmation && (
  <div className="modal">
    <div className="modalContent">
      <h3>Remove Cart</h3>
      <p>Are you sure you want to remove this item?</p>

      <button
        onClick={() => {
          decreaseQuantity(selectedItem.id);
          setShowItemConfirmation(false);
        }}
      >
        Yes
      </button>

      <button onClick={() => setShowItemConfirmation(false)}>
        No
      </button>
    </div>
  </div>
)}

 

 {/* Login Modal */}

{showLogin && (
    <div className="modalOverlay">
        <div className="modalContent">
            <h3>Login</h3>

{loginMessage && (
    <p className="success">{loginMessage}</p>
)}

            <form onSubmit={handleLogin}>
               <input
    type="email"
    name="email"
    placeholder="Email"
    value={loginData.email}
    onChange={handleLoginInput}
/>

{loginError.email && <p className="error">{loginError.email}</p>}

                <input
    type="password"
    name="password"
    placeholder="Password"
    value={loginData.password}
    onChange={handleLoginInput}
/>

{loginError.password && <p className="error">{loginError.password}</p>}

                <button type="submit">Login</button>


 <button
        type="button"
        className="cancelBtn"
        onClick={() => setShowLogin(false)}
    >
        Cancel
    </button>

            </form>
        </div>
    </div>
)}


  </section>
 )

}

export default cart;