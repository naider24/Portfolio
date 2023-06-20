import styled from 'styled-components'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin, BsGithub ,BsWhatsapp} from 'react-icons/bs'
import {DiReact} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3,SiNodedotjs,SiJavascript} from 'react-icons/si'
import {MdEmail} from 'react-icons/md'
import {RiCellphoneFill} from 'react-icons/ri'


export const DivPrincipal = styled.div`
height: 95%;
flex-direction: column;
width: 100%;
position: relative;
padding-top: 10px;
padding-block-end: 10px;
height: 100%;

`
export const Habilities = styled.div`

background-color : #191919;
font-family: 'Wix Madefor Display', sans-serif;
border-left:1px solid gray;
text-align: center;
`

export const ProgressBar = styled.div`
width: 90%;
height: 30px;
background-color: white;
padding-right: 5px;
`

export const Progress50 = styled.div`
 width: 50%;
  background-color: #056FCF;
  animation: progressAnimation 6s;
  height: 25px;
  color: white;
  text-align: end;
  padding-right: 5PX;
  padding-top: 5px;

  @keyframes progressAnimation {
  0% {
    width: 0%;
    
  }
  100% {
    width: 50%;
  
  }

}
`
export const Progress100= styled.div`

  width: 100%;
  background-color: #056FCF;
  animation: progressAnimation100 6s;
  height: 25px;
  color: white;
  text-align: end;
  padding-right: 5PX;
  padding-top: 5px;

  @keyframes progressAnimation100 {
  0% {
    width: 0%;
    
  }
  100% {
    width: 100%;
  
  }

}

`
export const SocialMedia = styled.div`
background-color : #191919;
font-family: 'Wix Madefor Display', sans-serif;
width: 100%;
text-align: center;
`

export const DivMediasIcons = styled.div`
width: 60%;
height: 40px;
padding: 10px;
border-radius: 50px;
`


export const Instagram = styled(FiInstagram)`
background-color: none;
margin-left: 20px;
color: white;
font-size:35px;
cursor: pointer;
&:hover{
    color: #056FCF;
    font-size: 36px;
}
`

export const Linkedin = styled(BsLinkedin)`
background-color: none;
margin-left: 20px;
color: white;
font-size:35px;
cursor: pointer;

&:hover{
    color: #056FCF;
    font-size: 36px;
}
`

export const GitHub = styled(BsGithub)`

background-color: none;
margin-left: 20px;
color: white;
font-size:35px;
cursor: pointer;
&:hover{
    color: #056FCF;
    font-size: 36px;
}

`

export const WhatSapp = styled(BsWhatsapp)`

background-color: none;
color: white;
font-size:35px;
cursor: pointer;
&:hover{
    color: #056FCF;
    font-size: 36px;
}
`

export const ReactIcon = styled(DiReact)`
text-align: start;
color: #056FCF;
font-size:30px;
border-radius: 50%;
padding: 5px;
border: 1px solid gray;

`
export const JavaScriptIcon = styled(SiJavascript)`
text-align: start;
color: #F7E018;
font-size:30px;
border-radius: 50%;
padding: 5px;
border: 1px solid gray;

`

export const CssIcon = styled(SiCss3)`
background-color: none;
color: #2196F3;
font-size:30px;
border-radius: 50%;
padding: 5px;
border: 1px solid gray;
`



export const HtmlIcon = styled(AiFillHtml5)`
background-color: none;
color: orange;
font-size:30px;
border-radius: 50%;
padding: 5px;
border: 1px solid gray;


`
export const NodeIcon = styled(SiNodedotjs)`
background-color: none;
color: green;
font-size:30px;
border-radius: 50%;
padding: 5px;
border: 1px solid gray;
`

export const DivEmailAndCell = styled.div`
display: flex;
width: 100%;
font-family:'Wix Madefor Display', sans-serif; 
justify-content: center;
padding: 20px;
flex-wrap: wrap;
align-items: center;
justify-content: center;

`
export const EmailIcon = styled(MdEmail)`
padding-right: 10px;
padding-left: 10px;
font-size: 40px;
color:#056FCF;

`
export const CellIcon= styled(RiCellphoneFill)`
padding-right: 10px;
padding-left: 10px;
font-size: 40px;
color:#056FCF;

`

export const NameFrameWork = styled.p`

color: gray;
margin: 0px;
margin-top: 20px;
padding-left: 10px;
font-weight: bold;
`