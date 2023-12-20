import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import store from '@/state/store'

import router from '@/router.tsx'

import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
