import React from 'react'

export default function Create() {
    return (
        <section className='mt-3'>
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">User Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="" />
                    <label htmlFor="floatingInput">Phone</label>
                </div>
            </form>
        </section>
    )
}