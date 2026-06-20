
function Home() {
   
  return (
   //simple welcome page for the key shop app
    <div className = "home">
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
    </div>
  );
}

export default Home;