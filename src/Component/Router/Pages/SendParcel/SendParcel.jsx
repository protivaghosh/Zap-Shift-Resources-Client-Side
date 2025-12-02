import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../UseAxiosSecure/UseAxiosSecure';
import UseAuth from '../../../../Hooks/UseAuth';

const SendParcel = () => {
    const { register, handleSubmit, control,
      //  formState: { errors },
      } = useForm();
      
      const axiosSecure = UseAxiosSecure();
      const {user} = UseAuth();
      const navigate = useNavigate()

    const serviceCenter  = useLoaderData();
    const regionsDuplicate = serviceCenter.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)]
    const senderRegion = useWatch({control, name: 'senderRegions'});
    const receiverRegion = useWatch({control, name: 'receiverRegions'});

    const districtByRegion= region =>{
        const regionDistrict = serviceCenter.filter(c => c.region === region)
        const districts = regionDistrict.map(d => d.district)
        return(districts);
    }
        // console.log(regions)

   const handleSendParcel = (data) => {
    const isDocument = data.type?.toLowerCase() === 'document';
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.weight);

    let cost = 0;

    if (isDocument) {
        cost = isSameDistrict ? 60 : 80;
    } else {

        if (parcelWeight <= 3) {
            cost = isSameDistrict ? 110 : 150;
        }

        if (parcelWeight > 3) {
            const extraWeight = parcelWeight - 3;
            const extraCharge = isSameDistrict
                ? extraWeight * 40
                : extraWeight * 40 + 40;

            cost = (isSameDistrict ? 110 : 150) + extraCharge;
        }
    }

    console.log("cost", cost);
    data.cost = cost;

    Swal.fire({
        title: "Agree with the cost?",
        text: `You will be charged ${cost} taka !`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, i agree!"
    }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.post('/parcels', data)
            .then(res => {
                console.log('after saving parcel', res.data)
                if(res.data.insertedId){
                  navigate('/dashBoard/my-parcels')
                   Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your parcel has created please pay",
                  showConfirmButton: false,
                  timer: 2000
                  });
                }
            })
        }
    });
};

    return (
      <div className="max-w-7xl mx-auto px-14 pt-10 pb-20 bg-[#ffffff] rounded-xl">
      <h3 className="font-bold text-3xl mb-6">Send A Parcel</h3>

      <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-8">

        {/* Document / Non-Document */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input {...register("type")} type="radio" value="Document" className="radio radio-success" />
            <span>Document</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input {...register("type")} type="radio" value="Non-Document" className="radio radio-success" />
            <span>Non-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            {...register("parcelName")}
            type="text"
            placeholder="Parcel Name"
            className="input input-bordered w-full"
          />

          <input
            {...register("weight")}
            type="number"
            placeholder="Parcel Weight (KG)"
            className="input input-bordered w-full"
          />
        </div>

        {/* Two Columns Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Sender Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xl">Sender Details</h4>

            <input {...register("senderName")} 
            defaultValue={user?.displayName}
            placeholder="Sender Name" className="input input-bordered w-full" />

              <input {...register("senderEmail")} 
              defaultValue={user?.email}
              placeholder="Sender Email" className="input input-bordered w-full" />

             <select {...register("senderRegions")} className="select select-bordered w-full">
              <option value="">Select your Regions</option>
              {
                regions.map((region, index )=> <option key={index} value={region}>{region}</option>)
              }
              
             
            </select>

            <select {...register("senderDistrict")} className="select select-bordered w-full">
                 <option value="">Select your District</option>
              {   
                districtByRegion(senderRegion).map((region, index )=> <option key={index} value={region}>{region}</option>)
              }
            </select>  

            <input {...register("senderAddress")} placeholder="Address" className="input input-bordered w-full" />

            <input {...register("senderPhone")} placeholder="Sender Phone No" className="input input-bordered w-full" />

            <textarea
              {...register("pickupInstruction")}
              placeholder="Pickup Instruction"
              className="textarea textarea-bordered w-full"
            />
          </div>

          {/* Receiver Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xl">Receiver Details</h4>

            <input {...register("receiverName")} placeholder="Receiver Name" className="input input-bordered w-full" />

            <input {...register("receiverEmail")} placeholder="Receiver Email" className="input input-bordered w-full" />

            <select {...register("receiverRegions")} className="select select-bordered w-full">
              <option value="">Select your Regions</option>
              {
                regions.map((region, index )=> <option key={index} value={region}>{region}</option>)
              }
              
             
            </select>

            <select {...register("receiverDistrict")} className="select select-bordered w-full">
                 <option value="">Select your District</option>
              {   
                districtByRegion(receiverRegion).map((region, index )=> <option key={index} value={region}>{region}</option>)
              }
            </select>  

            <input {...register("receiverAddress")} placeholder="Receiver Address" className="input input-bordered w-full" />

            <input {...register("receiverPhone")} placeholder="Receiver Contact No" className="input input-bordered w-full" />

            <textarea
              {...register("deliveryInstruction")}
              placeholder="Delivery Instruction"
              className="textarea textarea-bordered w-full"
            />
          </div>
        </div>

        <p className="text-sm">* PickUp Time 4pm–7pm Approx.</p>

        <button className="btn rounded-xl bg-lime-400 hover:bg-lime-500 text-black px-8">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
    );
};

export default SendParcel;