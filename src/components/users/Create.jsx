import React from 'react'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Create() {

    const { register, control, handleSubmit } = useForm();
    const navigate = useNavigate();
    const registerUser = async (data) => {
        const response = await axios.post(`${import.meta.env.VITE_BURL}/users`, data);
        if (response.status === 201) {
            navigate('/users');
        }
        console.log(response);
    }

    return (
        <section className='mt-3'>
            <form onSubmit={handleSubmit(registerUser)}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder=""
                        {...register("userName")} />
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder=""
                        {...register("email")} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingInput" placeholder=""
                        {...register("password")} />
                    <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder=""
                        {...register("phone")} />
                    <label htmlFor="floatingInput">Phone</label>
                </div>

                <button type="submit" className='btn btn-primary'>Add</button>
            </form>
            <DevTool control={control} />
        </section>
    )
}