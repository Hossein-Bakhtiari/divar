import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Dashboard from '../pages/Dashboard'
import AdminPage from '../pages/AdminPage'
import AuthPage from '../pages/AuthPage'
import NotFoundPage from '../pages/404'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/admin' element={<AdminPage />}/>
        <Route path='/auth' element={<AuthPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
    </Routes>
  )
}

export default Router