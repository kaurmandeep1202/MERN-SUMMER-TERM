
function Home() {
   
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
        
         <img src ="/images/keychain.jpg" alt="keychain" height="50%" width=" 50%"/>
        </div>
      </section>


        {/* PRODUCT SECTION  */}

      <section className="products">
        <h2> Our Popular Key Chains </h2>
        <div className="productGrid">
          <div className="card">
               <div className="cardBox">
                <img src ="/images/cartoon.jpg" alt="cartoon keychain" height="100%" width="100%"/>
               </div> 
             <h3> Cartoon Key Chain </h3>
             <p> Colorful and cute design</p>
             <strong> $10 </strong>
             <button className="cardBtn"> Add to Cart </button>
          </div>

          <div className="card">
               <div className="cardBox">
                <img src ="/images/nameee.jpg" alt="name keychain" height="205px" width="100%"/>
               </div> 
             <h3> Name Key Chain </h3>
             <p> Customized with your name</p>
             <strong> $12 </strong>
             <button className="cardBtn"> Add to Cart </button>
          </div>

          <div className="card">
               <div className="cardBox">
                <img src ="/images/leather.jpg" alt="leather keychain" height="100%" width="100%"/>
               </div> 
             <h3> Leather Key Chain </h3>
             <p> Classy and durable Look</p>
             <strong> $14 </strong>
             <button className="cardBtn"> Add to Cart </button>
          </div>

        

        </div>

      </section> 


      {/* ABOUT SECTION */}
      
         <section className="about">
           
           <h2> Why Choose Us?</h2>
            <p> We provide affordable, durable  </p>
         </section>

    </div>
  );
}

export default Home;