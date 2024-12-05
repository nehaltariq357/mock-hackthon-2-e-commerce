import React from 'react'

const Banner = () => {
  return (
    <main>
       <div>
        {/* grid left,right respectively */}
        <div className='grid grid-cols-[30%_70%]'> 
            
            <div>left</div>

            {/* images */}
            <div>right</div>
        </div>
       </div>
    </main>
  )
}

export default Banner