import React from 'react'
import { BiSolidFoodMenu, BiSolidDish } from "react-icons/bi";
import { CgMoreVerticalO } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";



const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>
        <button className='flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]'><FaHome className='inline mr-2' size={20}/> <p>Home</p></button>
        <button className='flex items-center justify-center text-[#ababab] w-[200px]'><BiSolidFoodMenu className='inline mr-2' size={20}/> <p>Orders</p> </button>
        <button className='flex items-center justify-center text-[#ababab] w-[200px]'><MdTableBar className='inline mr-2' size={20}/> <p>Tables</p> </button>
        <button className='flex items-center justify-center text-[#ababab] w-[200px]'><CgMoreVerticalO className='inline mr-2' size={20}/> <p>More</p> </button>
        <button className='absolute bottom-6 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center'>
            <BiSolidDish size={30}/>
        </button>
    </div>
  )
}

export default BottomNav