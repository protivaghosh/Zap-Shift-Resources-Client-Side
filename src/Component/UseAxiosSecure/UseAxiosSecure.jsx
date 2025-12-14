import axios from 'axios';
import React, { useEffect } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000'
  
});

const UseAxiosSecure = () => {
       const {user, logOut} = UseAuth();
       const navigate = useNavigate();
     useEffect(() =>{
        const reqInterCeptor =  axiosSecure.interceptors.request.use(config =>{
            config.headers.Authorization = `bearer ${user?.
accessToken}`
            return config;
          });

          // interceptors response
          const interCeptor =axiosSecure.interceptors.response.use((response)=>{
            return response
          }, (error)=>{
            console.log(error);

            const statusCode = error.status;
            if(statusCode === 401 || statusCode === 403){
               logOut()
               .then(()=>{
                  navigate('/login')
               })
            }


            return Promise.reject(error);
          })
   return () => {
        axiosSecure.interceptors.request.eject(reqInterCeptor);
        axiosSecure.interceptors.request.eject(interCeptor)
   }

     }, [user])

    return axiosSecure;
};

export default UseAxiosSecure;
