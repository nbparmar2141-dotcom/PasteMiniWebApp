import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: "/pastes",
      element: <div>
        <Navbar />
        <Paste />
      </div>
    },
    {
      path: "/pastes/:id",
      element: <div>
        <Navbar />
        <ViewPaste />
      </div>
    },

  ]
)

const App = () => {



  const [value, setValue] = useState(0)
  return (
    <div className='mx-2 my-1'>
      {/* <button className='bg-red-500 w-fit p-10 text-4xl font-semibold m-2 rounded-2xl duration-300 active:scale-95 pointer' onClick={() => {
        setValue(value + 1)
      }}>{value}</button> */}
      <RouterProvider router={router}/>
    </div>
  )
}

export default App