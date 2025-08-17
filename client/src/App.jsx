import React from 'react'
import User from './getUser/User'
import AddUser from './addUser/AddUser'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Update from './updateuser/Update'

function App() {
  const route = createBrowserRouter([
    {
      path: '/',
    element: <User />,
   },
   {
      path: '/add',
    element: <AddUser/>,
   },
    {
      path: '/update/:id',
    element: <Update/>,
   },
 
 
  ])
  return (
    <div>
     <RouterProvider router={route} />
    </div>
  )
}

export default App
