import React from 'react'
import ContactStyle from './style'
import cover from '../../assets/puertoET.png' 


export default function Contact() {
  return (
   <ContactStyle>
    <div className='contact_section'>

        <div className='wrap_info'>

            <div className='feat_image'>
                <div className='copy_image'>
                    <p>En el corazón de nuestra misión, estamos comprometidos con la sostenibilidad y el desarrollo, mientras te brindamos la frescura del mar en cada bocado. Descubre nuestra pasión por los mariscos, cuidando nuestro planeta y tu paladar, en cada producto que ofrecemos.</p>
                    <div className='overlay_copy'></div>
                </div>
            </div>

            <div class="info_shop">
          <div class="col_info">
            <h3>Sucursales</h3>  
            <p>Barrio el Centro, Puerto el Triunfo Usulutan.</p><p></p><p>Residencial Cima 4, San Salvador, San Salvador</p>
          </div>
          <div class="col_info">
          <h3>Horarios</h3>
          <p>Lunes - Sábado 7:00AM-5:00PM</p><p>Domingos 8:00AM-12:00PM</p>
          </div>
          <div class="col_info">
          <h3>Contáctanos</h3>
            <div class="socialmedia_wrap">
            
              <div class="col_media">
                
                <a href="https://www.facebook.com/people/JDK-Mariscos-Tevez/61551779054124/">
                <img src="//mariscostevez.myshopify.com/cdn/shop/t/18/assets/facebook.svg?v=54922043485500336541711990466" alt="fb" />
                </a>
              
              </div>
              <div class="col_media">
                
                <a href="https://www.instagram.com/mariscostevez/">
                  <img src="//mariscostevez.myshopify.com/cdn/shop/t/18/assets/instagram.svg?v=34617784482082657341711990466" alt="fb" />
                  </a>
                
              </div>
              <div class="col_media">
                
                <a href="https://wa.me/50372790991?text=Quiero Informacion de mariscos!">
                  <img src="//mariscostevez.myshopify.com/cdn/shop/t/18/assets/whatsapp.svg?v=176957896143597765551711990466" alt="fb" />
                  </a>
                
              </div>
              
            </div>
          </div>
        </div>

        </div>


    </div>
   </ContactStyle>
  )
}
