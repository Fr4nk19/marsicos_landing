import styled from "styled-components";

const NavigationStyle = styled.div`
     
        .nav_wrap{
            display: flex;
            align-items: center;
            align-content: space-between;
            flex-flow: wrap;
            padding: 10px 75px;

            .col_logo {
                flex: 1 1;

            a{
                img{
                    display: block;
                    width: 100%;
                    max-width: 150px;
                }            
            }

            
            }

            .col_links{
                    flex: 1 1;
                    text-align: right;
                    display: flex;
                    flex-flow: wrap;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: row-reverse;

                ul{
                    list-style: none;
                    display: flex;
                    padding: 0;
                    margin: 0;
                    align-content: space-between;
                    justify-content: space-around;
                    flex-flow: wrap;
                    column-gap: 20px;


                    li{

                        a{
                            font-family:'Inter', sans-serif;
                            font-weight: 600;
                            color: #0C286F;
                            font-size: 18px;
                            text-transform: uppercase;
                            text-decoration:none;
                        }
                    }
                }

            }

            
        }



`

export default NavigationStyle;