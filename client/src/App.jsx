import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice.js';
import InterviewPage from './pages/InterviewPage.jsx'
import Step2Interview from './Components/Step2interview.jsx'
import InterviewHistory from './pages/InterviewHistory.jsx'
import Pricing from './pages/Pricing.jsx'
import InterviewReport from './pages/interviewReport.jsx'



export const Serverurl = "https://interviewiq-hvex.onrender.com"

function App() {

 const dispatch = useDispatch()
  useEffect(()=>{
    const getUser = async ()=>{
   
      try {
        const result = await axios.get(
          Serverurl + "/api/user/current-user", {withCredentials: true})
        dispatch(setUserData(result.data))
        
        
      } catch (error) {
        dispatch(setUserData(null))
        
      }
    }
    getUser()
  },[dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>
      <Route path='/history' element={<InterviewHistory/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/report/:id' element={<InterviewReport/>}/>
      
      



    </Routes>
  )
}

export default App
