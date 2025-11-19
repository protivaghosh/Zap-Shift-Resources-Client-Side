import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const servicesCenter = useLoaderData()
    const mapRef = useRef(null)
    // console.log(servicesCenter)


    const handleSearch =(e)=>{
       e.preventDefault()

       const location = e.target.location.value;
       const district = servicesCenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()));

       if(district){
        const coord = [district.latitude, district.longitude]
        console.log(district, coord);
        // go to the location
        mapRef.current.flyTo(coord, 14);
       }
    }
    return (
        <div className='bg-base-100 p-10 my-10 rounded-xl'>
            <div className='my-10'>
                <h3 className='font-bold text-3xl my-4'>We are available in {servicesCenter.length} districts</h3>
             <form onSubmit={handleSearch} className="w-full max-w-md">
  <label className="input input-bordered flex items-center gap-2 rounded-full">
    
    <input
      type="text"
      className="grow"
      placeholder="Search here..."
      name="location"
    />

    <button
      type="submit"
      className="btn bg-[#caeb66] btn-sm rounded-full px-4"
    >
      Search
    </button>

  </label>
</form>
    <h3 className='font-bold my-4'>We deliver almost all over Bangladesh</h3>


            </div>
            {/* map section */}
            <div className='w-full h-[400px]'>
             <MapContainer 
             center={position} 
             zoom={8} 
             scrollWheelZoom={false}
             className='h-[400px]'
             ref={mapRef}
             >
             <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {
                    servicesCenter.map((center, index) =><Marker key={index} position={[center.latitude, center.longitude]}>
                   <Popup>
                    <strong>{center.district}</strong> <br /> Service Area : {center.covered_area.join(', ')}
                   </Popup>
                </Marker>)
                }

            </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;