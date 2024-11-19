import React from 'react'
import NavigationStyle from '../style'
import Logo from '../../assets/logo-nav.png'

export default function Navigation() {

const links = [ 
    {
        to    : '#catalogo',
        label : 'Catalogo' 
    },
    {
        to    : '#contacto',
        label : 'Contactanos' 
    }
]

  return (
    <NavigationStyle>
        <div className='nav_wrap'>
            <div className='col_logo'>
                <a href='/'>
                <img src={Logo} alt="logo nav"/>
                    </a> 
            </div>
            <div className='col_links'>
                <ul>
                    {links.map(link => (<li><a href={link.to}>{link.label}</a></li> ))}
                </ul>
            </div>
        </div>
    </NavigationStyle>
  )
}
