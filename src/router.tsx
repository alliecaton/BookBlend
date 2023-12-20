import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'
import Books from '@/pages/Books/Books'
import Home from '@/pages/Home/Home'

const router = createBrowserRouter([
  {
    // Root element of the app
    // <Outlet /> in App will render the matched route
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
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
    ],
  },
  {
    path: '/:catchAll(.*)',
    element: <div>404</div>,
  },
])

export default router
