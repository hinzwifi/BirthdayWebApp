import React from 'react'
import { Link } from 'react-router-dom'
function Signup() {
    return (
        <>
            <div className="flex ...">
                <div className="grow hidden md:block h-14 ...">
                   
                </div>
                <div className="   flex  justify-center h-screen grow-0 md:w-2/4 w-screen ...">
                    
                    <div className="flex items-center justify-center flex-col ...">
                    <h2 className="card-title"></h2> 
   
                        <div className="card flex-shrink-0 w-full max-w-sm sm:shadow-2xl   bg-base-100">
                            <form className="card-body">
                    
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label> 
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div> 
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label> 
                                <input type="text"  placeholder="password" className="input input-bordered" /> 
                                <label className="label">
                                    <Link to="/passrecover" href="#" className="label-text-alt">Forgot password?</Link>
                                </label>
                                </div> 
                                <div className="form-control mt-6">
                                <button type="sumbit" value="" className="btn btn-primary">Sign up</button>
                                
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block grow h-14 ...">
          
                </div>
            </div>

        </>
    )
}

export default Signup
