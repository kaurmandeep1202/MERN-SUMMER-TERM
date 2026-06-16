import { useState } from "react";
function Home() {
  const [counter, setCounter] = useState(0);

  return (
   //simple welcome page for the key shop app
    <div className = "page">
      <section className="home">
        <h1>Welcome to Key Shop</h1>
        <h2> Current value of counter is : {counter}</h2>
        <p>Your one-stop shop for stylish and personalized key rings.</p>
        <button onClick={() => setCounter(counter + 1)}> Click Me</button>
        
      </section>
    </div>
  );
}

export default Home;