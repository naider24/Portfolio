import { styled } from "styled-components"
import Photo from '../../imagens/Photo.jpeg'



export const Presentation = styled.h1`

 position: relative;

    top: 30%;  
    width: 15em;
    margin: 0 auto;
    margin-top: 50px;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 180%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);      
    font-weight: bold ;
    font-family: 'Wix Madefor Display', sans-serif;
    color: white;
    animation: typewriter 4s  infinite,
             blinkTextCursor 500ms steps(44)  normal both;


             
@media screen and (max-width: 768px) {
   margin-top: 100px;
  
}


/* The typing effect */
@keyframes typewriter{
  0%{width: 0;}
  100%{width: 13em;}
}

@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
  
}


` 
export const DivPrincipal = styled.div`
flex:2;
flex-direction: column;
position: relative;
margin-right: 10px;


`
export const Resume = styled.div`
position: relative;
display: flex;
width: 100%;
flex-direction: column;
font-family: 'Wix Madefor Display', sans-serif;
background-color: white;
padding: 50px;
font-size: 30px;

border-radius: 20px  30px  50px 45px;
color: gray;
text-align: center;
z-index: 2;
box-shadow: inset 0px 88px 100px -22px rgba(0,0,0,0.2);

@media screen and (max-width: 1024px) {
   font-size:25px;
}

`

export const MyPhoto = styled.div`
display: flex;
width: 400px;
height: 400px;
border-radius: 70%;
margin-top: 50px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-size: cover;
background-position: center center;
background-image: url(${Photo});


@media screen and (max-width: 1440px) {
   margin-top: 10px;
}
`

export const DivPerfil = styled.div`
display:flex;
width: 100%;
justify-content: center;
z-index: 2;



@media screen and (max-width: 1440px) {
   
   padding-block-end: 50px;

}


@media screen and (max-width: 1024px) {
   font-size: 25px;
   margin-top: 20px;
   height: 400px;
   justify-content: center;
}
`
export const MyName = styled.div`
 text-align:start;
  font-size: 40px;
  font-family: 'Wix Madefor Display', sans-serif;
  color: #056FCF;
  width: 90%;
  margin-top: 0px;
  padding-left: 30px;
  font-weight: bold;
  animation: color-change 3s infinite;
  
  
@keyframes color-change {
  0% { color: #056FCF; }
  50% { color: #191919; }
  100% { color: #056FCF; }
}
  
  
`
export const DivAboutMe = styled.div`
display:flex;
width: 100%;
@media screen and (max-width: 1024px) {
   flex-direction: column;
   
}
`
export const BackgroundBlue = styled.div`
background-color: #056FCF;
height: 50%;
left: 0%;
width: 100%;
position: absolute;
top: 30%;

`
