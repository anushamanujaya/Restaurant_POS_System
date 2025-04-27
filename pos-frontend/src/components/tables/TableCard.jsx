import React from 'react'

const TableCard = ({key, name, status, initial}) => {
  return (
    <div key={key}className='w-[250px] bg-[#262626] p-4 rounded-lg   cursor-pointer shadow-md'>
        <div className='flex items-center justify-between px-1'>
            <h1 className='text-[#f5f5f5] text-xl font-semibold'>{name}</h1>
            <p className='text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'>
                {status}
            </p>
        </div>
        <div className='flex items-center justify-center my-5'>
            <h1 className='bg-[#025cca] text-white rounded-full p-5 text-xl'>{initial}</h1>
        </div>
    </div>
  )
}

export default TableCard