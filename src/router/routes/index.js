import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/home'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/gift-certificates',
    component: lazy(() => import('../../views/GiftCertificatesList'))
  },
  {
    path: '/clientes',
    component: lazy(() => import('../../views/ClientList'))
  },
  {
    path: '/configuracion',
    component: lazy(() => import('../../views/SettingsPage'))
  },
  {
    path: '/mi-perfil',
    component: lazy(() => import('../../views/AccountSettings'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout'
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
