import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../../../Hooks/UseAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
      const {register, handleSubmit,  formState: { errors }}=useForm();
      const {signInUser}=UseAuth();

      const handleLogin =(data)=>{
            console.log('from data', data)
             signInUser(data.email, data.password)
             .then(result =>{
                console.log(result.user)
             })
             .catch(error =>{
                console.log(error)
             })
           }
    return (
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
            {/* email field */}
          <label className="label">Email</label>
          <input type="email" className="input"{...register('email', {required:true})} placeholder="Email" />

         {errors.email?.type==="required" && <p className='text-red-500'>Email is required</p>}


          {/* password field */}
          <label className="label">Password</label>
          <input type="password" className="input"{...register('password', {required:true, minLength:6})} placeholder="Password" />
          
          {errors.password?.type==="minLength" && <p className='text-red-500'>password must be 6 characters or longer</p>}

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-[#caeb66] mt-4">Login</button>
          <p>Don’t have any account? <Link className='text-red-500 underline' to='/register'>Register</Link></p>
        </fieldset>
      </form>
      <SocialLogin></SocialLogin>
    </div>
    );
};

export default Login;