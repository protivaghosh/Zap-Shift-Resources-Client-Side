import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../../../Hooks/UseAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const { register,  handleSubmit,  formState: { errors }} = useForm();
    const {registerUser} = UseAuth();

    const handleRegister =(data)=>{
             console.log("after register", data);
             registerUser(data.email, data.password)
             .then(result =>{
                console.log(result.user)
             })
             .catch(error =>{
                console.log(error)
             })
          }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
           <form className="card-body" onSubmit={handleSubmit(handleRegister)}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input"{...register('email', {required:true},)} placeholder="Email" />
          
          {errors.email?.type==="required" && <p className='text-red-500'>Email is required</p>}

          {/* password */}
          <label className="label">Password</label>
          <input type="password"{...register('password', {required:true, minLength:6, pattern:/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])/})} className="input" placeholder="Password" />
          
           {errors.password?.type==="required" && <p className='text-red-500'>Password is required</p>}
          
           {errors.password?.type==="minLength" && <p className='text-red-500'>password must be 6 characters or longer</p>}

            {errors.password?.type==="pattern" && <p className='text-red-500'>password must be at least one uppercase,at least one lowercase,at least one number and at least one special character</p>}

         <button className="btn bg-[#caeb66] mt-4">Register</button>
         <p>Already have an account? <Link className='text-red-500 underline' to='/login'>Login</Link></p>
        </fieldset>
           </form>
           <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;