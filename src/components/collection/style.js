import styled from "styled-components";

const CollectionStyle = styled.div`

.jdk_collections{
    position: relative;
    background: #0C286F;
        padding-top: 100px;
    padding-bottom: 100px;
}

.jdk_collections .collections-container {
    display: flex;
    height: 100%;
    max-width: 70%;
    margin: 0 auto;
    justify-content: space-between;
}
.jdk_collections  .content_buttons, .jdk_collections .collections-buttons {
    display: flex;
    flex-flow: column;
    flex: 1 1 5%;
    height: 100%;
    transition: flex-basis 0.5s ease;
}
.content_buttons.expanded {
    flex: 1 1 30%;
    transition: flex-basis 0.5s ease;
    z-index: 1;
}
.jdk_collections .tabcontent{
    justify-content: space-between;
    flex: 1 1 80%;
    flex-flow: column;
    background: #fff;
    padding: 20px 20px;
    z-index: 1;
}
.jdk_collections .tabcontent .single_product {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    padding: 15px 0px;
}
.jdk_collections .collections-container .divider {
    flex: 1 1 2%;
}
.jdk_collections .collections-buttons button span.image_col {
    display: block;
    width: 70px;
}
.jdk_collections .collections-buttons button span.title_col {
    width: 60%;
    text-align: left;
    margin-left: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 17px;
    display: none;
}
.jdk_collections .collections-buttons button {
    max-width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 5px;
    border: 0;
    background: #fff;
    border-bottom: 1px solid #d9d9d9;
    padding: 15px 10px;
    transition: 0.5s ease all;
}

.jdk_collections .collections-buttons{
    background: #fff;
    padding: 5px 5px;
}

.jdk_collections .collections-buttons button span.image_col img {
    width: 89%;
}
.jdk_collections .collections-buttons button:last-child{
    margin-bottom: 0;
}
.jdk_collections .collections-buttons button.active {
    background: #7cd1f0;
}

.jdk_collections .collections-buttons button:hover {
    background: #7cd1f0;
}
.content_buttons.expanded .filter_button {
    padding: 30px 5px;
}
.filter_button {
    background: #071e59;
    padding: 30px 20px;
}

.filter_button .label-button {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    display: none;
}
.content_buttons.expanded span.title_col {
    display: block!important;
}
.content_buttons.expanded .label-button {
    display: block;
}

.jdk_collections .tabcontent .single_product .prod_image {
    position: relative;
    overflow: hidden;
    flex: 1 1 30%;
}

.jdk_collections .tabcontent .single_product .prod_desc {
    flex: 1 1 60%;
    padding: 0 30px;
}

.jdk_collections .tabcontent .single_product .prod_price {
    flex: 1 1 10%;
    text-align: right;
}

.jdk_collections .tabcontent .single_product .prod_desc h3 {
    color: #071e59;
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 10px;
}

.jdk_collections .tabcontent .single_product .prod_desc p {
    color: #84829f;
    font-size: 16px;
    line-height: 1.4;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}

.jdk_collections .tabcontent .single_product .prod_price p {
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #7cd1f0;
}
.jdk_collections .title_content{
    padding-bottom:65px; 
}
.jdk_collections .title_content h2 {
    width: fit-content;
    margin: 0 auto;
    font-family: 'Chelsea Market';
    font-weight: 400;
    font-size: 40px;
    position: relative;
    color:#fff;
}
.jdk_collections .title_content h2 span.line_title {
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
}

.jdk_collections .banner_collection {
    background-size: cover!important;
    padding: 10%;
    position: relative;
    background-repeat: no-repeat!important;
}

.jdk_collections .banner_collection p {
    position: absolute;
    bottom: 20%;
    right: 4%;
    font-family: 'Chelsea Market';
    color: #fff;
    font-weight: 400;
    font-size: 27px;
    margin: 0;
}

.jdk_collections .collections-buttons button:focus, .jdk_collections .collections-buttons button:active {
    outline: none;
}

.vertical_fish {
    position: absolute;
    left: 0%;
    bottom: 8%;
}

.crab_art {
    position: absolute;
    right: 0;
    top: 15%;
}
@media  screen and (max-width: 1440px) {
    .jdk_collections .collections-container{
        max-width: 90%;
    }
    .content_buttons.expanded .content_toggle:after{
        top: 10px!important;
    }
 
}

@media screen and (max-width:768px) {
    .jdk_collections .collections-container {
        flex-flow: column;
    }
    .content_buttons.expanded .filter_button{
        display: none;
    }
    .jdk_collections .tabcontent{
        margin-top: 45px;
    }

    .jdk_collections .banner_collection{
        padding: 15%;
    }
}
@media screen and (max-width:500px) {
    .jdk_collections .tabcontent .single_product{
        flex-flow: column;
    }
    .jdk_collections .tabcontent .single_product .prod_desc{
        padding: 0;
        margin-top: 10px;
    }
    .jdk_collections .banner_collection{
        padding: 25%;
    }
    .jdk_collections .title_content h2{
        text-align: center;
    }
    .jdk_collections .title_content h2 span.line_title{
        width: 90%;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
}

`

export default CollectionStyle;