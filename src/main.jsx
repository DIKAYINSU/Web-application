  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { RouterProvider,createBrowserRouter } from 'react-router-dom'
  import './index.css'
  import App from './App.jsx'
  import 'flowbite'

  import About from '../src/Pages/About.jsx'
  import Home from '../src/Pages/Home.jsx'
  import Contact from '../src/Pages/Contact.jsx'


  import('flowbite').then(() => {
    console.log('Flowbite initialized')
  })

  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home/>

  //   },
  //   {
  //     path:"/About",
  //     element:<About/>
  //   },
  //     {
  //     path:"/Contact",
  //     element:<Contact/>
  //   }
  // ]);

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )

  // ReactDOM.createRoot(document.getElementById('root')).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router}/>
  //   </React.StrictMode>
  // )
