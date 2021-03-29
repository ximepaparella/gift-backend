import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Gift & Vouchers'

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
    component: lazy(() => import('../../views/gift-certificates/GiftCertificatesList'))
  },
  {
    path: '/pendientes-de-pago',
    component: lazy(() => import('../../views/gift-certificates/GiftCertificatesUnpaid'))
  },
  {
    path: '/vencidos',
    component: lazy(() => import('../../views/gift-certificates/GiftCertificatesPassed'))
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
    component: lazy(() => import('../../views/account-settings/index'))
  },
  {
    path: '/modos-de-pago',
    component: lazy(() => import('../../views/account-settings/index'))
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
