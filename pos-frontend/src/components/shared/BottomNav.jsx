import React, {useState} from 'react'
import { BiSolidFoodMenu } from "react-icons/bi";
import { CgMoreVerticalO } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaCirclePlus } from 'react-icons/fa6';
import Modal from '../shared/Modal.jsx';
import { setCustomer } from '../../redux/slices/customerSlice.js';
import { useDispatch } from 'react-redux';



const BottomNav = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen (false);

  const increment = () => {
    if(guestCount >=6) return;
    setGuestCount((prev)=> prev+1);
  }
  const decrement = () => {
    if(guestCount <=0) return;
    setGuestCount((prev)=> prev-1);
  }

  const isActive = (path) => location.pathname === path;

  const handleCreateOrder =() => {
    //send , data to store
    dispatch (setCustomer({name , phone , guests: guestCount}));
    navigate("/tables");
  }

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around'>
        <button 
          onClick={() => navigate('/')}
          className={`flex items-center justify-center font-bold ${isActive ("/") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]" } w-[300px] rounded-[20px]`}>
          <FaHome className='inline mr-2' size={20}/> <p>Home</p>
        </button>

        <button 
          onClick={() => navigate('/orders')}
          className={`flex items-center justify-center font-bold ${isActive ("/orders") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]" } w-[300px] rounded-[20px]`}>
          <BiSolidFoodMenu className='inline mr-2' size={20}/> <p>Orders</p> 
        </button>

        <button 
          onClick={() => navigate('/tables')} 
          className={`flex items-center justify-center font-bold ${isActive ("/tables") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]" } w-[300px] rounded-[20px]`}>
          <MdTableBar className='inline mr-2' size={20}/> <p>Tables</p> 
        </button>
      
        <button 
        className='flex items-center justify-center text-[#ababab] w-[200px]'>
          <CgMoreVerticalO className='inline mr-2' size={20}/> <p>More</p> 
        </button>

        <button 
        disabled={isActive('/tables') || isActive('/menu')}
        onClick={openModal} className='absolute bottom-6 bg-[#f6b100] text-[#f5f5f5] rounded-full p-3 items-center'>
            <FaCirclePlus size={40}/>
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal} title='Create Order'>
          <div>
            <label className='block text-[#ababab] mb-2 text-sm font-medium'>Customer Name</label>
              <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' name='' placeholder='Enter customer name' id='' className='bg-transparent flex-1 text-white focus:outline'/>
              </div>
          </div>
          <div>
            <label className='block text-[#ababab] mb-2 text-sm font-medium mt-3'>Customer Phone</label>
              <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type='number' name='' placeholder='+94-123456789' id='' className='bg-transparent flex-1 text-white focus:outline'/>
              </div>
          </div>
          <div>
            <label className='block mb-2 mt-3 text-sm font-medium text-[#ababab]'>Guest</label>
              <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg'>
                <button onClick={decrement} className='text-yellow-500 text-2xl'>&minus;</button>
                <span className='text-white'>{guestCount} Person</span>
                <button onClick={increment} className='text-yellow-500 text-2xl'>&#43;</button>
              </div>
          </div>
          <button onClick={handleCreateOrder} className='w-full bg-[#f6b100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700'>Create Order</button>
        </Modal>


    </div>
  )
}


export default BottomNav