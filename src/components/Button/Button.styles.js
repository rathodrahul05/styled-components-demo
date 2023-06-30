import styled from 'styled-components';



export const StyledButton=styled.button`
border:2px solid blue;
background-color: ${(props)=>props.variant==='outline'?'white':'blue'};
color: ${(props)=>props.variant==='outline'?'blue':'white'};
font-size: 20px;
padding:20px 25px;
cursor: pointer;
&:hover {
    background-color: ${(props)=>props.variant!=='outline'?'white':'blue'};
color: ${(props)=>props.variant!=='outline'?'blue':'white'};
}

`

// extending styles i.e. adding some more style to existing styled component when needed
// for eg we need to create a button which should have css styles as existing ones and also with some new styles then we can use extending styles feature

export const FancyButton=styled(StyledButton)`
background-image: linear-gradient(to right, pink 1%,red 100%);
border: none;

`