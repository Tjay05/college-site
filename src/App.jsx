import { createContext } from 'react';
import { useState } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import AppLayout from './layout/Index';
import Home from './pages/home/Index';

export const ModalContext = createContext();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Route>
  )
)

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen, isLoginModalOpen, setIsLoginModalOpen }}>
      <RouterProvider router={router} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </ModalContext.Provider>
  )
}

export default App
