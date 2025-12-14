import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAuth from '../../../../../Hooks/UseAuth';
import UseAxiosSecure from '../../../../UseAxiosSecure/UseAxiosSecure';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();
     const {data : parcels =[], refetch} = useQuery({
        queryKey : ['myParcels', user?.email],
        queryFn: async () => {
        const res = await axiosSecure.get(`/parcels?email=${user.email}`)
        return res.data;
  }, 
     })

     const handleParcelDelete = id =>{
              console.log(id)

              Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axiosSecure.delete(`parcels/${id}`)
    .then(res =>{
        console.log(res.data)

        if(res.data.deletedCount){
            Swal.fire({
      title: "Deleted!",
      text: "Your parcel has been deleted.",
      icon: "success"
    });
    //   refetch the data in the ui
        refetch();

    }
    })
    
  }
});

     }

    return (
        <div>
            <h3>all of my parcels  {parcels.length}</h3>

    <div className="overflow-x-auto max-w-5xl mx-auto mt-6">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Cost</th>
        <th>Payment</th>
        <th>Delivery status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

        {
            parcels.map((parcel, index) =><tr key={parcel._id}>
        <th>{index+1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>
            {
                parcel.paymentStatus === 'paid'? <span className='text-green-500'>Paid</span>
                : <Link to={`/dashboard/payment/${parcel._id}`}>
                <button className='bg-lime-400 px-2 py-1'>pay</button>
                </Link>
            }
        </td>
        <td>{parcel.deliveryStatus}</td>
        <td>
            <button className="btn btn-square hover:bg-lime-400">
               <FaMagnifyingGlass />
            </button>
             <button className="btn btn-square hover:bg-lime-400 mx-2">
                <FaEdit />
            </button>
             <button
             onClick={()=>handleParcelDelete(parcel._id)} className="btn btn-square hover:bg-lime-400">
                <FaTrashAlt />
            </button>
        </td>
      </tr>)
        }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyParcels;