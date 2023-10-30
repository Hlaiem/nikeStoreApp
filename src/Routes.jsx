import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import ITech from './pages/ITech'
import Beaute from  './pages/Beaute'
import MaisonDeco from './pages/MaisonDeco'

export default function Routes() {
    const router = useRoutes ([
        {
            path: "/",
            element: <Home />,
          },
          {
            path: "/ITech",
            element: <ITech />,
          },
          {
            path: "/MaisonDeco",
            element: <MaisonDeco />,
          },
          {
            path: "/Beaute",
            element: <Beaute />,
          },
         
    ])
  return router
}