import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import UseAxiosSecure from '../../../../UseAxiosSecure/UseAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams, setSearchParams] =useSearchParams();
    const axiosSecure = UseAxiosSecure()
    const sessionId = searchParams.get('session_id')
    console.log(sessionId);

    useEffect(()=>{
        if(sessionId){
         axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
         .then(res =>{
            console.log(res.data)
         })
        }

    }, [sessionId, axiosSecure])
    return (
        <div>
            <h2 className='text-4xl'>payment successful</h2>
        </div>
    );
};

export default PaymentSuccess;