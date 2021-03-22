// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25'>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='https://spabelgrano.com' target='_blank' rel='noopener noreferrer'>
          Spa Belgrano
        </a>
        <span className='d-none d-sm-inline-block'>. Todos los derechos reservados</span>
      </span>
      <span className='float-md-right d-none d-md-block'>
        Hand-crafted & Made with
        <Heart size={14} /> . Estudio equis.
      </span>
    </p>
  )
}

export default Footer
