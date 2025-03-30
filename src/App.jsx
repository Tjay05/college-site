import { createContext } from 'react';
import { useState } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import AppLayout from './layout/Index';
import About from './pages/about/Index';
import ExcoModal from './pages/academics/ExcoPopUp';
import Academics from './pages/academics/Index';
import Community from './pages/community/Index';
import Home from './pages/home/Index';
import Profile from './pages/profile/Index';
import Research_Project from './pages/research & project/Index';

export const ModalContext = createContext();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Academics' element={<Academics/>}/>
        <Route path='exco/:id' element={<ExcoModal/>}/>
        <Route path='Community' element={<Community/>}/>
        <Route path='Research' element={<Research_Project/>}/>
        <Route path='Profile' element={<Profile/>}/>
      </Route>
    </Route>
  )
)

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isUploadDocOpen, setIsUploadDocOpen] = useState(false);

  return (
    <ModalContext.Provider 
      value={{ isModalOpen, setIsModalOpen, isLoginModalOpen, setIsLoginModalOpen, isEditModalOpen, setIsEditModalOpen, isUploadDocOpen, setIsUploadDocOpen }}
    >
      <RouterProvider router={router} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} isEditModalOpen={isEditModalOpen} setIsEditModalOpen={setIsEditModalOpen} isUploadDocOpen={isUploadDocOpen} setIsUploadDocOpen={setIsUploadDocOpen} />
    </ModalContext.Provider>
  )
}

export default App
