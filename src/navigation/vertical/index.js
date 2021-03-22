import { Home, Gift, Users, Settings, UserX, CreditCard, Circle } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    header: 'Gift Certificates'
  },
  {
    id: 'giftcertificate',
    title: 'Gift Certificates',
    icon: <Gift size={20} />,
    navLink: '/gift-certificates',
    badge: 'success',
    badgeText: '2',
    children: [
      {
        id: 'giftcertificate',
        title: 'Ver Todos',
        icon: <Gift size={20} />,
        navLink: '/gift-certificates'
      },
      {
        id: 'unpaid',
        title: 'Pendientes de Pago',
        icon: <CreditCard size={12} />,
        navLink: '/pendientes-de-pago'
      },
      {
        id: 'passed',
        title: 'Vencidos',
        icon: <Circle size={12} />,
        navLink: '/vencidos'
      }
    ]
  },
  {
    header: 'Ventas'
  },
  {
    id: 'client',
    title: 'Clientes',
    icon: <Users size={20} />,
    navLink: '/clientes'
  },
  {
    header: 'Configuración'
  },
  {
    id: 'account',
    title: 'Perfil',
    icon: <UserX size={20} />,
    navLink: '/mi-perfil'
  },
  {
    id: 'settings',
    title: 'Cuenta',
    icon: <Settings size={20} />,
    navLink: '/configuracion'
  },
  {
    id: 'payment',
    title: 'Modos de Pago',
    icon: <CreditCard size={20} />,
    navLink: '/modos-de-pago'
  }
]
