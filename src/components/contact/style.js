import styled from "styled-components";
import Puerto from '../../assets/puertoET.png'
const ContactStyle = styled.div`
.contact_section{
    background:#0c286e;
    padding: 100px 0;

    .wrap_info {
        width: 70%;
        margin: 0 auto;
    
        .feat_image{
            background-image: url(${Puerto});
            background-size: cover !important;
            padding: 108px;

            .copy_image {
                padding: 70px;
                position: relative;

                p{
                    z-index: 2;
                    position: relative;
                    font-family: Inter, sans-serif;
                    font-size: 22px;
                    line-height: 30px;
                    margin: 0;
                    font-weight: 500;
                    text-align: center;
                    color: #fff;
                }
                .overlay_copy {
                    background: #0c286e;
                    opacity: 0.6;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1;
                }
            
            }
        
        }

        .info_shop {
            display: flex;
            justify-content: space-between;
            padding: 50px 0;
        
            .col_info {
                width: 33.3%;

                h3{
                color: #5cd8d2;
                font-family: Chelsea Market, system-ui;
                font-weight: 400;
                font-size: 30px;
                }
                p{
                    font-family: Montserrat, sans-serif;
                    font-size: 20px;
                    color:#fff;
                }


                .socialmedia_wrap {
                    display: flex;
                    justify-content: space-between;
                    width: 50%;
                    align-items: center;
                
                
                    .col_media {
                    
                            a {
                                display: block;
                                border: 1px solid #fff;
                                padding: 10px;
                                background-image: linear-gradient(#1095c1, #1095c1);
                                background-size: 0 100%;
                                background-repeat: no-repeat;
                                transition: .4s;

                                &:hover{
                                    background-size: 100% 100%;
                                    border: 1px solid #1095c1;
                                }
                            }

                            img{
                                width: 37px;
                            }
                        }

                }
            }
        
        }
    
    }


}
`

export default ContactStyle;