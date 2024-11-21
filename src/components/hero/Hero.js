import React from "react";
import HeroStyle from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination, Scrollbar, Autoplay  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BG1 from '../../assets/bg1.png'
import Puerto from '../../assets/puertoImage.png'
import Mariscos from '../../assets/mariscos.png'
import Pescado from '../../assets/pescado.png'


// Datos de las diapositivas (puede moverse a un archivo separado si es necesario)
const slides = [
  {
    title: "Comprometidos con el futuro",
    paragraph:
      "En Mariscos Tevéz, estamos profundamente comprometidos con la sostenibilidad y el desarrollo local. Sabemos que nuestros océanos son un recurso preciado que debemos proteger y preservar para las generaciones futuras",
    background: BG1,
    secondImage: Puerto,
  },
  {
    title: "¡Del Mar a tu Mesa!",
    paragraph:
      "Descubre la Frescura de Nuestros Mariscos desde nuestras embarcaciones en las aguas costeras de El Salvador, seleccionamos los mariscos más frescos y deliciosos para llevarlos hasta tu mesa.",
      background: BG1,
      secondImage: Mariscos,
  },
  {
    title: "Servicio de Limpieza de Pescados",
    paragraph:
      "En Mariscos Tevéz, comprendemos que la frescura de nuestros mariscos no solo se trata de la captura, sino también de la comodidad en la cocina. Por eso, ofrecemos un servicio de limpieza de pescados que ahorra tiempo y esfuerzo en tu preparación culinaria.",
      background: BG1,
      secondImage: Pescado,
  },
];

export default function Hero() {
  return (
    <HeroStyle>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        //navigation={{ clickable: true}}
        loop={true}
        autoplay={{
            delay:3000,
            disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide 
            key={index} 
            style={{
                backgroundImage: `url(${slide.background})`, // Corregimos aquí,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="swiper_wrap"
          >
            <div
              className="hero_content"
            >
              <div className="column_hero">
                <h1>{slide.title}</h1>
                <p>{slide.paragraph}</p>
              </div>
              <div className="column_image">
                {slide.secondImage && (
                  <img
                    src={slide.secondImage}
                    alt={`Slide ${index + 1}`}
                    className="second_image"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroStyle>
  );
}
