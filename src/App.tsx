import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        setError((error as AxiosError).message);
      }

      fetchUsers();
    };

    // axios;
    // .then((response) => setUsers(response.data))
    //   setError(error.message);
    // .catch((error) => {
    // });
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
