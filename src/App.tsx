import axios, { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import ToastNotification from "./components/ToastNotification";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
    // Works only on prod not dev cause of strict mode
    // .finally(() => {
    //   setLoading(false);
    // });

    // Cancelled fetch request
    return () => controller.abort();
  }, []);

  // delete user
  const deleteUser = (id: number) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));

    axios
      .delete(`https://jsonplaceholder.typicode.com/xusers/${id}`)
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  // add users
  const addUser = () => {
    const newUser = {};
  };

  return (
    <>
      {error && <ToastNotification message={error} />}
      {/* Loader */}
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <button className="btn btn-primary m-3" onClick={() => addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
