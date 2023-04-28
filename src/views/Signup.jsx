import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="container-fluid login-card my-5">
            <form className="col-lg-2 col-sm-6 mx-auto">
                <legend className="text-center">Sign Up</legend>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">
                        Repeat Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                    />
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        I have read and accepted <NavLink className='primary' to='/terms'>the terms and conditions</NavLink>
                    </label>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">
                        Confirm Sign Up
                    </button>
                    <label className="mt-3" htmlFor="exampleCheck1">
                        Already have an account? Log in here!
                    </label>
                    <NavLink to='/login' className="btn btn-primary w-100">
                        Log In
                    </NavLink>
                </div>
            </form>
        </div>
  )
}

export default Signup