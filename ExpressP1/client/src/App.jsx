import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import DateTime from './components/DateTime'
import Users from './components/Users'
import Home from './components/Home'
import User from './components/User'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/datetime" element={<DateTime />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
