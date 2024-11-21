import React from 'react'
import Truck from '../../assets/truck.png'
import Payment from '../../assets/payment.png'
import Customer from '../../assets/customer.png'
import Fish from '../../assets/fish.png'
import CardStyle from './style'

export default function Cards() {

    const cards = [
        {
            icon : Truck,
            text : 'Envíos a todo el país'
        },
        {
            icon : Payment,
            text : 'Diferentes formas de pago'
        },
        {
            icon : Customer,
            text : 'Atencion al cliente disponible'
        },
        {
            icon : Fish,
            text : 'Productos frescos, 100% salvadoreños.'
        }

    ]

  return (
    <CardStyle>

        <div className='section_cards'>

            <div className='wrap_cards'>

            {cards.map((card, index) => (
                <div className='single_card' key={index}>

                    <div className='col_image'>
                        <img src={card.icon} alt={`icon-${index + 1}`} />
                    </div>
                    <div className='col_text'>
                        <p>{card.text}</p>
                    </div>
                </div>
     ))}

            </div>

        </div>

    </CardStyle>
  )
}
