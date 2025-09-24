import React from 'react'

function PageFour() {
  return (
    <div className='px-40 py-20 w-full h-screen bg-black'>
        <div className="video-wrapper w-full h-full bg-amber-900">
            <video autoPlay muted loop src="/videos/meta-verse.mp4" className='w-full h-full object-cover '></video>
        </div>
    </div>
  )
}

export default PageFour