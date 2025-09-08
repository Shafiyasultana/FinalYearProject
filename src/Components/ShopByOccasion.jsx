import React from 'react'

function ShopByOccasion() {
  return (
    <div>
      <div className='text-4xl font-bold flex justify-center items-center'>
        Shop by Occasion
      </div>
      <div className='flex gap-3 items-center justify-center mt-8'>
       <button className='h-[30px] w-[80px] border-2'>FORMALS</button>
       <button className='h-[30px] w-[80px] border-2'>CASUALS</button>
       <button className='h-[30px] w-[100px] border-2'>GOING OUT</button>
      </div>
    </div>
  )
}

export default ShopByOccasion