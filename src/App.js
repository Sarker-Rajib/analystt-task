import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import UserCard from './Components/UserCard/UserCard';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  return (
    <div className="container pt-5">
      <h1>Users</h1>
      <div className="row">
        {
          user?.map((user, i) => <UserCard user={user} key={i} />)
        }
      </div>
    </div>
  );
}

export default App;
