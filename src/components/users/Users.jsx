import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
    setUsers(data.users);
  }

  useEffect(() => {
    getUsers();
  }, [])
  return (
    <>
      <Link className='btn btn-primary mt-3' to={'/create'} >Create</Link>
      <div className="row pt-2">
        {users.map(user => (
          <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Name: {user.userName}</h5>
                <p className="card-text">Email: {user.email}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
