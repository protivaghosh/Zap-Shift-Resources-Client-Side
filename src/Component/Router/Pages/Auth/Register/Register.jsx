import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register,  handleSubmit,  formState: { errors }} = useForm();

    const handleRegister =(data)=>{
             console.log("after register", data)
    }
    return (
        <div>
           <form onSubmit={handleSubmit(handleRegister)}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input"{...register('email', {required:true})} placeholder="Email" />
          
          {errors.email?.type==="required" && <p className='text-red-500'>Email is required</p>}

          {/* password */}
          <label className="label">Password</label>
          <input type="password"{...register('password', {required:true, minLength:6})} className="input" placeholder="Password" />
          
           {errors.password?.type==="required" && <p className='text-red-500'>Password is required</p>}
          
           {errors.password?.type==="minLength" && <p className='text-red-500'>password must be 6 characters or longer</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
           </form>
        </div>
    );
};

export default Register;