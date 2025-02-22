import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/usersx")
      .then((response) => setUsers(response.data))
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  }, []);

  return (
    <>
      {error && <p className="text-danger"> {error}</p>}
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
