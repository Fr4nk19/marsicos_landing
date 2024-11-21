import styled from "styled-components";

const CardStyle = styled.div`

.section_cards{
    background: #071E59;
    padding: 105px 0;


    .wrap_cards{
            display: flex;
            align-items: center;
            max-width: 75%;
            margin: 0 auto;
            column-gap: 20px;
            flex-flow: wrap;
            justify-content: space-evenly;

        
            .single_card{
                background: #CF4E3B;
                max-width: 250px;
                display: flex;
                justify-content: space-evenly;
                padding: 25px;
                align-items: center;
                margin: 0 auto;
                column-gap: 16px;
            

                .col_image {
                    flex: 1 1 25%;
                    max-width: 25%;
                    text-align: center;
                }

            .col_text{
                flex: 1 1 75%;
                max-width: 75%;


                p{
                    color: #fff;
                    font-family:'Inter', sans-serif;
                    font-size:18px;
                    font-weight:400;
                }
            }

            }
    
        }

}


`

export default CardStyle;