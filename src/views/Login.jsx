import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="container-fluid login-card py-5 col-lg-2 col-sm-6">
            <form className="mx-auto">
                <legend className="text-center">Log In</legend>
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
                    <button type="submit" className="btn btn-primary w-100">
                        Log In
                    </button>
                </div>
                <label className="form-check-label" htmlFor="exampleCheck1">
                        Don't have an account? Sign up here!
                    </label>
                    <NavLink to='/signup' className="btn btn-primary w-100">
                        Sign Up
                    </NavLink>
            </form>
        </div>
    );
};

export default Login;
