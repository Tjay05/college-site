import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import AppLayout from './layout/Index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<AppLayout/>}/>
        {/* <Route index element={<Home/>}/> */}
      {/* </Route> */}
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
