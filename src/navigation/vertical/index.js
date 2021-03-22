import { Home, Gift, Users, Settings, UserX } from 'react-feather'

export default [
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'giftcertificate',
    title: 'Gift Certificates',
    icon: <Gift size={20} />,
    navLink: '/gift-certificates',
    badge: 'success',
    badgeText: '2'
  },
  {
    id: 'client',
    title: 'Clientes',
    icon: <Users size={20} />,
    navLink: '/clientes'
  },
  {
    id: 'settings',
    title: 'Configuración',
    icon: <Settings size={20} />,
    navLink: '/configuracion'
  },
  {
    id: 'account',
    title: 'Mi Perfil',
    icon: <UserX size={20} />,
    navLink: '/mi-perfil'
  }
]
