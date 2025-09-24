import React from 'react'
import PageOne from './pages/home/PageOne'
import PageTwo from './pages/home/PageTwo'
import PageThree from './pages/home/PageThree'
import PageFour from './pages/home/PageFour'


function App() {
  return (
    <div className='wrapper w-full min-h-screen bg-zinc-950'>
      <PageOne/>
      <PageTwo/>
      <PageThree/>
      <PageFour/>
    </div>
  )
}

export default App