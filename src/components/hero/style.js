import styled from "styled-components";

const HeroStyle = styled.div`

  span.swiper-pagination-bullet {
        width: 16px;
        height: 16px;
        background: #CF4E3B;
        opacity:1;
        margin: 0 8px !important;
    }

    span.swiper-pagination-bullet.swiper-pagination-bullet-active{
        background: #7CD1F0;
    }

.swiper_wrap {
    height: 90vh;
    display: flex;
    align-items: center;

  
   

        .hero_content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            color: white;
            max-width:75%;
            margin:0 auto;
            left:0;
            right:0;
    

            .column_hero {
                flex: 1 1 50%;
                max-width:50%;

                    h1{
                        font-family: "Chelsea Market", system-ui;
                        font-size: 60px;
                        font-weight: 400;

                    }
                    p{
                      font-family: 'Inter', sans-serif;
                      font-size: 18px;
                      line-height: 1.3;
                    }
                }
       
            .column_image{
                flex: 1 1 50%;
                max-width:50%;
                text-align: right;

            .second_image {
                max-width: 100%;
                height: auto;
            }
       
        }

   
    
    }

}







`


export default HeroStyle;