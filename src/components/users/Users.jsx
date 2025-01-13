import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
    setUsers(data.users);
  }
  const deleteUser = async (id)=>{
    const {data} = await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
    console.log(data);
  }

  useEffect(() => {
    getUsers();
  }, [users])
  return (
    <>
      <Link className='btn btn-primary mt-3' to={'/create'} >Create</Link>
      <div className="row pt-2 pb-2">
        {users.map(user => (
          <div className="col-3 mb-3">
            <div className="card" style={{ width: '16rem' }}>
              <div className="card-body">
                <h5 className="card-title">Name: {user.userName}</h5>
                <p className="card-text">Email: {user.email}</p>
                <div className='d-flex gap-2'>
                <button onClick={()=>deleteUser(user._id)} className='btn btn-danger'> Delete </button>
                <Link className='btn btn-outline-secondary' to={`/details/${user._id}`}> Details </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
