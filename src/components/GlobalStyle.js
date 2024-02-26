import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root{
    --color-primary:#E16002
    --color-secondary:white
}
html{
    font-size:62.5%
}

body{
font-family: Inter,Arial, Helvetica, sans-serif;
font-size: 2.4rem;
line-height: 1.5;
/* background: #191919; */

}
h1,h2,h3{
    margin-bottom: 1rem;
}
h1{
    font-size:7rem;
}
h2{
    font-size:4rem;
}
h3{
    font-size:3rem;
}
p{
    margin-top: 0;
   
}
.container{
    max-width: 1140px;
    margin: 0 auto;
}
.block {
  --block--padding: 6rem;
  padding: var(--block--padding);
}
.block--skewed-left {
  padding-bottom: calc(var(--block--padding) + 10rem);
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%);
}
.block--skewed-right{
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 95%);
    padding-bottom: calc(var(--block--padding) + 10rem);
}
.custome--skewed{
    clip-path: polygon(0% 31%, 100% 0%, 100% 100%, 0% 100%);
   
}
.block__header {
  text-align: center;
  margin-bottom: 4rem;
}
.block--dark{
    background-color: black;
    color: white;
}
.certificate--btn{
    justify-self: center;
    align-self: center;
}


    

@media screen and (min-width:768px){
    body{
        font-size: 1.8rem;
    }
    h1{
        font-size: 8rem;
     
    }
    h2{
        font-size: 4rem;
    }
    h3{
        font-size: 2.4rem;
    }
   
}
.grid{
        display: grid;
    }
@media screen and (min-width:768px){
   
    .grid--1x2{
        grid-template-columns:repeat(2,1fr);
    }
}
@media screen and (min-width:1024px){
   
   .grid--1x3{
       grid-template-columns:repeat(3,1fr);
   }
}


   

`;
export default GlobalStyle;
