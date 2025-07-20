import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/users') // adjust your API URL if needed
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Error fetching users:', err);
        setError('Failed to load users');
        setLoading(false);
      });
  }, []);


    const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
      await axios.delete(`http://localhost:3000/users/delete/${userId}`);
      setUsers(users.filter((user) => user.UserID !== userId));
    } catch (err) {
      console.error('❌ Error deleting user:', err);
      alert('Failed to delete user');
    }
  };
  const formatDate = (dateStr) => {
    if (!dateStr) return '-';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-list-container">
      <h1>👥 User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Name</th>
            <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Blood Group</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
  {users.map((user, index) => (
    <tr key={user._id || index}>
      <td>{index + 1}</td>
      <td>{user.UserName || '-'}</td>
      <td>{user.Email || '-'}</td>
      <td>{user.Phone || '-'}</td>
      <td>{user.RoleName || '-'}</td>
      <td>{user.BloodGroupName || '-'}</td>
      <td>{user.Gender || '-'}</td>
      <td>{formatDate(user.DOB)}</td>
      <td>{user.Location || '-'}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(user.UserID)}
                >
                  Delete
                </button>
              </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default UserList;