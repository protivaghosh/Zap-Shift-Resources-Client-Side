import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../../../Hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import UseAxiosSecure from '../../../../UseAxiosSecure/UseAxiosSecure';

const Register = () => {

    const { register,  handleSubmit,  formState: { errors }} = useForm();
    const {registerUser, updateUserProfile} = UseAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure();

    const handleRegister =(data)=>{
             console.log("after register", data.photo[0]);
            const profileImg = data.photo[0];

             registerUser(data.email, data.password)
             .then(result =>{
                console.log(result.user);
            // strong the image in form data
               const formData = new FormData();
            formData.append('image', profileImg);

            // send the photo to store and get the url
            const image_Api_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_Key}`
            axios.post(image_Api_Url, formData)
            .then(res=>{
               const photoURL =res.data.data.url
            // create user in the dataBase
                const userInfo = {
                       email : data.email,
                       displayName : data.name,
                       photoURL : photoURL

                }
                axiosSecure.post('/user', userInfo)
                .then(res =>{
                  if(res.data.insertedId){
                     console.log('user create in the database')
                  }
                })
                // update your profile
             const userProfile = {
                 displayName: data.name,
                 photoURL : photoURL
             }
              updateUserProfile(userProfile)
              .then(()=>{
               console.log('user profile updated done');
                navigate(location?.state || '/')
              })
             .catch(error =>console.log(error))
            
            })
             .catch(error => console.log(error));
            })
             .catch(error =>{
                console.log(error)
             })
          }
    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h3 className='font-bold text-3xl text-center'>Create an Account</h3>
            <p className='mt-2 text-center'>Register with ZapShift</p>
           <form className="card-body" onSubmit={handleSubmit(handleRegister)}>
             <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input"{...register('name', {required:true},)} placeholder="Your Name" />
          
          {errors.name?.type==="required" && <p className='text-red-500'>Name is required</p>}
       {/* photo field */}
       <label className="label">Photo</label>
       
        <input type="file" className="file-input"{...register('photo', {required:true},)} placeholder="Your Photo" />
          
          {errors.photo?.type==="required" && <p className='text-red-500'>photo is required</p>}


                {/* email field */}
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
         <p>Already have an account? <Link state={location.state} className='text-red-500 underline' to='/login'>Login</Link></p>
        </fieldset>
           </form>
           <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;