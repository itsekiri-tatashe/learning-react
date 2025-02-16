// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Like from "./components/Like";

import { useState } from "react";

function App() {
  // let cities = ["Lagos", "Abuja", "Ibadan", "Port Harcourt", "Warri"];
  // const [alertVisible, setAlertVisibility] = useState(false);
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  return (
    <>
      <p>
        <h2>{pizza.name}</h2>
        <ul>
          {pizza.toppings.map((topping, index) => (
            <li key={index}>{topping}</li>
          ))}
        </ul>
      </p>

      <button onClick={handleClick}> Add Toppings</button>
    </>
    // <div>
    //   <Like onClick={() => console.log("Clicked!")}/>
    //   {alertVisible && (
    //     <Alert
    //       children="Login Successful"
    //       onClick={() => setAlertVisibility(false)}
    //     />
    //   )}
    //   <Button text="My Button" onClose={() => setAlertVisibility(true)} />
    // </div>
  );
}

export default App;
