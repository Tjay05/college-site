import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import AppLayout from './layout/Index';
import Home from './pages/home/Index';

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
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
