import { useState } from 'react'

import './App.css'
import { Routes , Route} from 'react-router-dom'
import OverviewPage from './Pages/OverviewPage'
import ProductPage from './Pages/ProductPage'
import Sidebar from './Pages/Sidebar'
import UserPage from './Pages/UserPage'
import SalesPage from './Pages/SalesPage'
import OrdersPage from './Pages/OrdersPage'
import Analyticspage from './Pages/Analyticspage'
import SettingsPage from './Pages/SettingsPage'


function App() {
  const [count, setCount] = useState(0)

  return (
     <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'></div> 
         <div className='absolute inset-0 backdrop-blur-sm'></div>
      </div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<OverviewPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/users" element={<UserPage/>}/>
        <Route  path='/sales' element={<SalesPage/>}/>
        <Route path='/orders' element={<OrdersPage/>}/>
        <Route path='/analytics' element={<Analyticspage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
      </Routes>

     </div>
  )
}

export default App
