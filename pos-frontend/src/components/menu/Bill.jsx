import React from 'react'

const Bill = () => {
  return (
    <>
        <div className='flex items-center justify-between px-5 mt-2'>
            <p className='text-xs text-[#ababab] font-medium mt-2'>Items(4)</p>
            <h1 className='text-[#f5f5f5] text-md font-bold'>Rs.240</h1>
        </div>

        <div className='flex items-center justify-between px-5 mt-2'>
            <p className='text-xs text-[#ababab] font-medium mt-2'>Tax(5.25%)</p>
            <h1 className='text-[#f5f5f5] text-md font-bold'>Rs.240</h1>
        </div>

        <div className='flex items-center gap-3 px-5 mt-4'>
            <button className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold'>Cash</button>
            <button className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold'>Online</button>
        </div>

        <div className='flex items-center gap-3 px-5 mt-4 mb-4'>
            <button className='bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold text-lg'>Print Reciept</button>
            <button className='bg-[#f6b100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold text-lg'>Place Order</button>
        </div>
    </>
  )
}

export default Bill