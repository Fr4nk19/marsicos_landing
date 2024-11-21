import React, { useState } from "react";
import CollectionStyle from "./style";
import camaronIcon from "../../assets/camaronIcon.png";
import coverCamaron from '../../assets/coverCamaron.png'
import camaronJumbo from '../../assets/camaronJumbo.png'
import camaronMediano from '../../assets/camaronMediano.png'
import camaronPeque from '../../assets/camaronPequeno.png'
import colaIcon from '../../assets/colaCamaron.png'
import colaCover from '../../assets/colaCover.png'
import camaronPelado from '../../assets/colaCamaronPelado.png'
import chacalin from '../../assets/chacalin.png'
import langostaIcon from '../../assets/langostaIcon.png'
import langostaCover from '../../assets/LangostaCover.png'
import pulpo from '../../assets/pulpo.png'
import jaiba from '../../assets/jaiba.png'
import caracol from '../../assets/caracol.png'
import LangostaDeMar from '../../assets/langostaDeMar.png'
import pescadoCover from '../../assets/pescadoCover.png'
import pescadoIcon from '../../assets/pescadoIcon.png'
import lonja from '../../assets/lonjaBocaColorada.png'
import corvinaRobalo from '../../assets/corvinaRobalo.png'
import robaloEntero from '../../assets/robaloentero.png'
import bocaEntera from '../../assets/bocaColoradaEntero.png'
import fileteDorado from '../../assets/FileteDorado.png'
import Cabezasopa from '../../assets/cabezaBocaSopa.png'


export default function Collection() {
  // Datos de las colecciones
  const collections = [
    {
      title: "Camarones",
      icon: camaronIcon,
      cover: coverCamaron,
      products: [
        {
          title: "Camaron Jumbo",
          image: camaronJumbo,
          description:
            "Los Camarones Jumbo son la realeza de los mariscos. Estos gigantes marinos son conocidos por su impresionante tamaño y su sabor excepcional.",
        },
        {
          title: "Camaron Mediano",
          image: camaronMediano,
          description:
            "Nuestros Camarones Medianos son la elección perfecta para quienes buscan un equilibrio ideal entre tamaño y sabor. Con su frescura inigualable, estos camarones son versátiles y deliciosos en cualquier plato.",
        },
        {
          title: "Camaron Pequeño",
          image: camaronPeque,
          description:
            "Los Camarones Pequeños son pequeñas delicias del mar. A pesar de su tamaño, estos camarones están llenos de sabor y versatilidad.",
        },
      ],
    },
    {
      title: "Cola de Camaron",
      icon: colaIcon,
      cover: colaCover,
      products: [
        {
          title: "Cola de camaron/Chacalín pelado",
          image: camaronPelado,
          description:
            "Preparadas y peladas para tu comodidad, estas colas de camarón te permiten disfrutar de la frescura y textura única de los camarones sin el trabajo extra.",
        },
        {
          title: "Cola de camaron/Chacalin entero",
          image: chacalin,
          description:
            "Nuestras Colas de Camarón Chacalín Entero son la elección perfecta para quienes buscan la máxima autenticidad y sabor en sus platos de mariscos.",
        },
      ],
    },
    {
        title: "Langostas, Pulpos, Jaibas, Otros",
        icon: langostaIcon,
        cover: langostaCover,
        products: [
          {
            title: "Pulpo",
            image: pulpo,
            description:
              "El Pulpo es una maravilla del mar que despierta los sentidos con su textura tierna y sabor inconfundible. Ya sea a la parrilla con aceite de oliva y limón, o en una fresca ensalada de pulpo, este delicioso cefalópodo es una experiencia gastronómica que te sumergirá en el auténtico sabor del océano. ¡Prepáralo y descubre por qué el pulpo es un manjar tan apreciado!",
          },
          {
            title: "Jaiba",
            image: jaiba,
            description:
              "La Jaiba es una delicia costera con su carne jugosa y dulce. Con su sabor único, este marisco es una experiencia culinaria que te transportará a las playas soleadas. Ya sea en un ceviche refrescante o en un delicioso guiso, la jaiba es un verdadero regalo del mar que despierta tus papilas gustativas.",
          },
          {
            title: "Caracol",
            image:caracol,
            description:
              "Los Caracoles son una joya marina escondida. Su carne tierna y sabrosa se presta a una amplia variedad de platos que deleitarán tu paladar. Desde sopas hasta guisos y platos de pasta, los caracoles son una elección deliciosa que te sorprenderá con su sabor único. Descubre la magia de los sabores del mar con los caracoles.",
          },
          {
            title: "Langosta de Mar",
            image: LangostaDeMar,
            description:
              "La Langosta de Mar es la reina de los mariscos, conocida por su carne tierna y exquisita. Cada bocado es una experiencia de lujo que te transportará a las aguas más cristalinas del océano. Su sabor inigualable y su textura delicada la convierten en un manjar codiciado. Prepárala a la parrilla o en una salsa de mantequilla y limón para disfrutar de una experiencia culinaria inolvidable.",
          },
        ],
      },
      {
        title: "Pescado",
        icon: pescadoIcon,
        cover: pescadoCover,
        products: [
          {
            title: "Lonja Boca Colorada",
            image: lonja,
            description:
              "Deléitate con nuestra Lonja Boca Colorada, un auténtico tesoro del mar. Fresca, jugosa y llena de sabor.",
          },
          {
            title: "Lonja de Corvina/Robalo",
            image: corvinaRobalo,
            description:
              "La Lonja de Corvina/Robalo es una verdadera joya marina. Con su carne tierna y sabrosa, este pescado es perfecto para los amantes del marisco.",
          },
          {
            title: "Corvina Robalo Entero",
            image: robaloEntero,
            description:
              "Nuestra Corvina Robalo Entera es una elección magistral para quienes buscan la frescura y calidad en su plato.",
          },
          {
            title: "Boca Colorada entera",
            image: bocaEntera,
            description:
              "La Boca Colorada Entera es una deliciosa aventura marina en un solo plato. Con su carne jugosa y sabrosa, esta pieza completa es perfecta para los amantes de los mariscos.",
          },
          {
            title: "Filete Dorado",
            image: fileteDorado,
            description:
              "Nuestro Filete Dorado es el tesoro más codiciado del océano. Este filete, con su color dorado y textura delicada, te llevará a un viaje de sabor único.",
          },
          {
            title: "Cabeza de boca colorada para sopa",
            image: Cabezasopa,
            description:
              "La Cabeza de Boca Colorada es el regalo del mar que estabas esperando. Con su abundante carne y sabores concentrados, esta parte del pescado es perfecta para preparar caldos y sopas con un sabor excepcional.",
          },
        ],
      }
  ];

  const [activeTab, setActiveTab] = useState(collections[0].title); // Estado para la pestaña activa

  return (
    <CollectionStyle>
      <div className="jdk_collections">
        <div className="title_content">
          <h2>Nuestros Catálogos</h2>
          <span className="line_title"></span>
        </div>

        <div className="collections-container">
          <div className="content_buttons expanded" id="tabContainer">
          <div class="filter_button">
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" onclick="toggleSidebar();"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 content_toggle"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 label-button">Nuestros catalagos
                Filtrar por:</span>
            </label>

            </div>
            <div className="collections-buttons">
              {collections.map((collection) => (
                <button
                  key={collection.title}
                  className={`tablinks ${
                    activeTab === collection.title ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(collection.title)}
                >
                  {collection.icon && (
                    <span className="image_col">
                      <img
                        src={collection.icon}
                        alt={collection.title}
                        className="collection-icon"
                      />
                    </span>
                  )}
                  <span className="title_col">{collection.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="divider"></div>

          {/* Contenido de la pestaña activa */}
          {collections.map((collection) => (
            <div
              key={collection.title}
              className={`tabcontent ${
                activeTab === collection.title ? "active" : "hidden"
              }`}
            >
              <div className="banner_collection" style={{backgroundImage: `url(${collection.cover || "https://placehold.co/912x182/png"})`}} >
                <p>{collection.title}</p>
              </div>
              <div className="products_container">
                {collection.products.map((product, index) => (
                  <div key={index} className="single_product">
                    <div className="prod_image">
                      <img
                        src={product.image || "https://placehold.co/285x198/png"}
                        alt={product.title}
                        className="product-image"
                      />
                    </div>
                    <div className="prod_desc">
                      <h3>{product.title}</h3>
                      <p>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CollectionStyle>
  );
}
