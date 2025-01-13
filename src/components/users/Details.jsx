import axios, { Axios } from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export default function Details() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {register, handleSubmit, setValue} = useForm();
    const getDetails = async()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
        setValue("userName",data.user.userName);
        setValue("email",data.user.email);
        setValue("phone",data.user.phone);
        console.log(data);
    }

    useEffect(()=>{
        getDetails();
    },[])

    const updateUser = async (value)=>{
        const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,
            {
                userName:value.userName
            }
        );

        if(response.status === 200){
            navigate('/users');
        }
    }

  return (
            <section className='mt-3'>
                <form onSubmit={handleSubmit(updateUser)}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder=""
                            {...register("userName")} />
                        <label htmlFor="floatingInput">User Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder=""
                            {...register("email")}
                            disabled />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder=""
                            {...register("phone")}
                            disabled />
                        <label htmlFor="floatingInput">Phone</label>
                    </div>
    
                    <button type="submit" className='btn btn-primary mb-2'>Update</button>
                </form>
            </section>

  )
}
