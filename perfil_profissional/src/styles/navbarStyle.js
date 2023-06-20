
import styled , {keyframes} from 'styled-components'
import {BsList} from 'react-icons/bs'


export const Nav = styled.nav`

flex-direction: row;
width: 100%;
align-items: center;

@media screen and (max-width: 768px) {
      height: 5em;
      justify-content: end;
      
    }
  
`
export const Option = styled.p`
transition: 0.6s;
font-family: 'Wix Madefor Display', sans-serif;
font-size: 17px;
color: white;
cursor: pointer;
&:hover{
    color: #056FCF;
    font-size: 18px;
}
@media screen and (max-width: 425px) {
display: none;

}
`
export const OptionMobile = styled.p`
display: none;
@media screen and (max-width: 770px) {
display: flex;
justify-content: center;
transition: 0.6s;
font-family: 'Wix Madefor Display', sans-serif;
font-size: 17px;
color: white;
background-color: #191919;
}
&:hover{
    font-size: 20px;
}
`
export const MobileOptions = styled.div`
@media screen and (max-width: 770px) {
 position: absolute;
 border-radius: 5px;
 right: 0%;
 top: 0%;
 padding-top: 5px;
 width: 100%;
 height: 200px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 z-index: 3;
 background-color: #191919;
}
`
export const ListIcon = styled(BsList)`
display:none;
@media screen and (max-width: 768px) {

    display: flex;
    font-size: 45px;
    color: white;
    cursor: pointer;
    padding-right: 20px;
    }
`
