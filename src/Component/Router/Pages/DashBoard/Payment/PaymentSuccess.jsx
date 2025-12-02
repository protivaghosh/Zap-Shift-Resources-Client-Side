import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import UseAxiosSecure from '../../../../UseAxiosSecure/UseAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams, setSearchParams] =useSearchParams();
    const [paymentInfo, setPaymentInfo] = useState({});
    const axiosSecure = UseAxiosSecure()
    const sessionId = searchParams.get('session_id')
    console.log(sessionId);

    useEffect(()=>{
        if(sessionId){
         axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
         .then(res =>{
            console.log(res.data)
            setPaymentInfo({
                transactionId : res.data.transactionId,
                trackingId : res.data.trackingId
            })
         })
        }

    }, [sessionId, axiosSecure])
    return (
        <div>
            <h2 className='text-4xl'>payment successful</h2>
            <p>transaction Id: {paymentInfo.transactionId} </p>
            <p>tracking Id : {paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;