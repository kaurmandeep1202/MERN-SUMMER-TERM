
function Home({ addToCart }) {
   const products = [
    {
      id:101,
      name:'Cartoon Key Chain',
      description: 'colorful and cute design',
      price: 10,
      image: '/images/cartoon.jpg',
      stock: 4
    },


    // {
    //   name:' Name key chain',
    //   description: 'Customized with your name ',
    //   price: '$12',
    //   image: '/images/nameee.jpg'
    // },

    {
      id:102,
      name:'Leather Key Chain',
      description: 'Classy and durable Look',
      price: 14,
      image: '/images/leather.jpg',
      stock: 3
    },

    {
      id:103,
      name:'The Avenger Key Chain',
      description: 'Your super hero key chain',
      price: 13,
      image: '/images/avenger.jpg',
      stock: 2
    }

   ];
  return (
   //simple welcome page for the key shop app
    <div className = "home">
     
     {/* HERO SECTION */}

      <section className ="hero">
        <div className="heroText">
          <h2> Beautful Key Chain ForEveryStyle </h2>
          <p> Explore stylish, cute and customized key chains for yourself and yours friends and family </p>
          <button> Shop Now </button>
        </div>  

        <div className="heroImage">
        
         <img src ="/images/keychain.jpg" alt="keychain" height="100%" width=" 100%"/>
        </div>
      </section>


        {/* PRODUCT SECTION  */}

      <section className="products">
        <h2> Our Popular Key Chains </h2>
        <div className="productGrid">



    {/* MAP FUNCTION USED  */}
          {products.map((product, index)=> (
            
            <div className="card">
               <div className="cardBox">
                <img src ={product.image} alt="cartoon keychain" height="100%" width="100%"/>
               </div> 
             <h3>{product.name} </h3>
             <p> {product.description}</p>
             <strong> ${product.price} </strong>
             <button className="cardBtn" onClick={() => addToCart(product)}> Add to Cart </button>
          </div>
          ))}

           

          {/* <div className="card">
               <div className="cardBox">
                <img src ="/images/nameee.jpg" alt="name keychain" height="205px" width="100%"/>
               </div> 
             <h3> Name Key Chain </h3>
             <p> Customized with your name</p>
             <strong> $12 </strong>
             <button className="cardBtn" onClick={addToCart}> Add to Cart </button>
          </div>

          <div className="card">
               <div className="cardBox">
                <img src ="/images/leather.jpg" alt="leather keychain" height="100%" width="100%"/>
               </div> 
             <h3> Leather Key Chain </h3>
             <p> Classy and durable Look</p>
             <strong> $14 </strong>
             <button className="cardBtn" onClick={addToCart}> Add to Cart </button>
          </div>

                <div className="card">
               <div className="cardBox">
                <img src ="/images/avenger.jpg" alt="leather keychain" height="100%" width="100%"/>
               </div> 
             <h3> The Avenger Key Chain </h3>
             <p> Your super hero key chain</p>
             <strong> $13 </strong>
             <button className="cardBtn" onClick={addToCart}> Add to Cart </button>
          </div> */}

        </div>

      </section> 


      {/* ABOUT SECTION */}
      
         <section className="about">
           
           <h2> Why Choose Us?</h2>
            <p> We provide affordable, durable and nice designs, perfect for gifting.</p>
         </section>

    </div>
  );
}

export default Home;