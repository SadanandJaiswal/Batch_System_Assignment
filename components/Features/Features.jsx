import React from 'react'

const Features = () => {
  return (
    <div className='flex min-h-screen px-[7%] border border-blue-500'>
      <div className="w-1/2">
        <img
          src="/assets/features.png"
          alt="logo"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col justify-center border border-red-500 item-center w-1/2">
        <h1 className="text-red-500">FEATURES</h1>
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold  text-black mb-3">
            Uifry Premium
        </h1>
        <div>
          <span>Ic</span> 
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Features
