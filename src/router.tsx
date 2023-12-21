import { createBrowserRouter } from 'react-router-dom'

import Books from '@/pages/Books/Books'
import Home from '@/pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    // element: <div>Login</div>,
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/:catchAll(.*)',
    element: <div>404</div>,
  },
])

export default router
