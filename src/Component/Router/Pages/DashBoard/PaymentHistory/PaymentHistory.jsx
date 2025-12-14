import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../../../Hooks/UseAuth';
import UseAxiosSecure from '../../../../UseAxiosSecure/UseAxiosSecure';

const PaymentHistory = () => {
    
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const {data : payments = []} = useQuery({
        queryKey : ['/payments'],
        queryFn : async() =>{
           const res = await axiosSecure.get(`/payments?email=${user.email}`)
           return res.data;
        }
    })


    return (
        <div>
            payment -history :  {payments.length}

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Amount</th>
        <th>Paid Time</th>
        <th>Transaction Id</th>
      </tr>
    </thead>
    <tbody>
      {
        payments.map((payment, index) => <tr key={payment._id}>
        <th>{index+1}</th>
        <td>Cy Ganderton</td>
        <td>${payment.amount}</td>
         <td>{payment.paidAt}</td>
        <td>{payment.transactionId}</td>
      </tr>)
      }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;