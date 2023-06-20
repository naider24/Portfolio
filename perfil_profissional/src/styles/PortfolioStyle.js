import styled from 'styled-components'


export const DivPortfolio = styled.div`
display: flex;

background-color : #191919;
font-family: 'Wix Madefor Display', sans-serif;
height: 95%;
text-align: center;
flex-direction: column;
border-left: 1px solid gray;

`
export const DivCards = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
@media screen and (max-width: 425px) {
      flex-direction: column;

      align-items: center;
      margin-right: 0px;
    }



`
export const Card = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;

width:300px;
padding: 10px;
cursor: pointer;
border-radius: 10px;
transition: 0.6s;
border: 1px solid gray;
text-decoration: none;

&:hover #titleCard{
    border: none;
}
&:hover #des{
    color: white;
    border: none;
}

&:hover{
    box-shadow: inset 0px 10px 75px 25px rgba(0,0,0,0.3);
    border: 1px solid white;

}

@media screen and (max-width: 425px) {
      flex-direction: column;

      align-items: center;
      margin-right: 0px;
    }



`
export const ImgCard = styled.div`
border-radius: 10px;
background-color: white;
padding-top: 20px;
width: 100%;
height: 200px;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;

`
export const TitleCard = styled.p`
margin: 0px;
color: #056FCF;
font-weight: bold;
font-family: 'Wix Madefor Display', sans-serif;
font-size: 20px;
width: 100%;
padding-top: 10px;
padding-block-end: 10px;
transition: 0.6s;


`

export const Description = styled.p`
display: flex;
margin: 0px;
color: gray;
justify-content: center;
align-items: center;
font-family: 'Wix Madefor Display', sans-serif;
width: 100%;
padding-block-end: 10px;
transition: 0.6s;
padding-block: 20px;
height: 50px;

`

export const DivFrameworks = styled.div`
display: flex;
width: 100%;
padding: 5px;
justify-content: center;
align-items: center;


`

export const Frameworks = styled.div `
padding: 5px;
margin-right: 20px;
width: 50px;
font-size: 10px;

border-radius:5px;
background-color: #056FCF;
font-family: 'Wix Madefor Display', sans-serif;
color: white;
`