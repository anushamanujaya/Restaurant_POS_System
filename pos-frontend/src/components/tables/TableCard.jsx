import React from 'react'
import { getBgColor } from '../../utils/index.js';
import { useNavigate } from 'react-router-dom';


const TableCard = ({ key ,name, status, initial, seats }) => {

  const navigate = useNavigate();
  const handleClick = () =>{
    if(status === "Booked") return;
    navigate('/menu');
  }
  return (
    <div onClick={handleClick} key={key} className='w-[250px] hover:bg-[#1f1f1f] bg-[#262626] p-4 rounded-lg cursor-pointer shadow-md'>
      <div className='flex items-center justify-between px-1'>
        <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
        <p className={`${status === "Booked" ? "text-green-600 bg-[#2e4a40]" : "bg-[#664a04] text-white"} px-2 py-1 rounded-lg`}>
          {status}
        </p>
      </div>
      <div className='flex items-center justify-center mt-5 mb-7'>
        <h1 className={`text-white rounded-full p-5 text-xl`} style={{backgroundColor:getBgColor()}}>{initial}</h1>
      </div>
      <p className='flex items-start text-[#ababab] text-xs'>Seats: <span className='text-[#f5f5f5]'>{seats}</span></p>
    </div>
  );
}

export default TableCard;
