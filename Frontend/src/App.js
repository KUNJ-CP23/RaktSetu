import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/users/all') // Update this to match your backend route
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('❌ Axios Error:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>🩸 Blood Bank - User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> ({user.role})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
