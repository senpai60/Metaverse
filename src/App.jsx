import React from 'react'
import PageOne from './pages/home/PageOne'
import PageTwo from './pages/home/PageTwo'


function App() {
  return (
    <div className='wrapper w-full min-h-screen bg-zinc-950'>
      <PageOne/>
      <PageTwo/>
    </div>
  )
}

export default App