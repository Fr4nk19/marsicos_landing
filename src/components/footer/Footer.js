import React from 'react'
import FooterStyle from './style'
import Logo from '../../assets/logoWhite.png'
export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <FooterStyle>
        <div className='footer_section'>
                <div className='wrap_footer'>
                    <img src={Logo} alt='logo footer'/>
                    <p>©{currentYear} Mariscos Tevéz. Todos los derechos reservados.</p>
                </div>
        </div>
    </FooterStyle>
  )
}
