import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import Layout from '../Layout/Layout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Users from '../pages/User'
import Team from '../components/Team'
import SelectedUser from '../components/SelectedUser'
import NotFound from '../components/NotFound'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}>
        <Route path='contacts' element={<h1>contacts tab</h1>} />
        <Route path='location' element={<h1>location tab</h1>} />
        <Route path='address' element={<h1>address tab</h1>} />
      </Route>
      <Route path='/about/team' element={<Team />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<SelectedUser />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)
