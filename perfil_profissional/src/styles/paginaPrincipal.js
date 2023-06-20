import styled from 'styled-components'

export const Page = styled.div`

background-color: #191919;

overflow: hidden;
margin: 0px;
display: flex;
flex-direction: column;
`
export const MyDetails = styled.div`
display: flex;
position: relative;
width: 100vw;
height: 100vh;
overflow-y: auto;
overflow-x: hidden;
flex-direction: row;
position: relative;

@media screen and (max-width: 768px) {
      flex-direction: column;
      overflow-y: auto;
    }

`

export const DivToggles = styled.div`
display: flex;

width: 100%;
padding-top: 20px;
flex-direction: column;
z-index: 5;
justify-content: center;
align-items: center;


`

export const ToggleHabilities = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
font-family: 'Wix Madefor Display', sans-serif;
border:  ${(props)=>(props.checked? '0px' : '1px solid gray')};
font-size: 14px;
height: 30px;
font-weight: bold;
transition:0.6s;
border-radius: ${(props)=>(props.checked? '5px' : '0px')};
background-color: ${(props)=>(props.checked? '#056FCF' : '#191919')};
color: ${(props)=>(props.checked? '#191919' : 'gray')};
cursor: pointer;
&:hover{
border-radius: 5px;
background-color: #056FCF;
color: #191919;
border: none;


}

`

export const TogglePortfolio = styled.button`

display: flex;
justify-content: center;
align-items: center;
font-family: 'Wix Madefor Display', sans-serif;
border:  ${(props)=>(props.checked? '0px' : '1px solid gray')};
font-size: 14px;
width: 50%;
height: 30px;
margin-top: 10px;
font-weight: bold;
transition:0.6s;
border-radius: ${(props)=>(props.checked? '5px' : '0px')};
background-color: ${(props)=>(props.checked? '#056FCF' : '#191919')};
color: ${(props)=>(props.checked? '#191919' : 'gray')};
cursor: pointer;
&:hover{
border-radius: 5px;
background-color: #056FCF;
color: #191919;
border: none;
}
`
