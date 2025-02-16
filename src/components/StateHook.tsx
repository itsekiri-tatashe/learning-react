import { useState } from "react";

const StateHook = () => {
  // Saving State as an Object
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    address: {
      street: "",
      lga: "",
      city: "",
    },
  });

  // Loader Functionality
  const [isLoading, setIsLoading] = useState(false);

  // Array State
  const [tags, setTags] = useState(["happy", "excited"]);

  // Pure Components are compenets that take the same inputs (props in this case) and return the same output

  //  When updating a state object, we have to pass a copy of the whole state with the fields we want to update
  const newPerson = {
    firstName: person.firstName,
    lastName: person.lastName,
    // address: {
    //   street: "",
    //   lga: "",
    //   city: "",
    // },
  };

  //   Instead of copy each field one by one, we can use spread methods
  const anotherPerson = {
    ...person,
    lastName: "Pinnick",
  };
  //   setPerson(anotherPerson)

  // Updating Nested Objects
  const personAsAnObject = {
    ...person,
    address: { ...person.address, lga: "Eti-Osa" },
  };

  // Updating Arrays
  // Adding item
  setTags([...tags, "exciting"]);

  // Remove
  setTags(tags.filter((tag) => tag !== "happy"));

  // Updating
  setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  return <div>StateHook</div>;
};

export default StateHook;
