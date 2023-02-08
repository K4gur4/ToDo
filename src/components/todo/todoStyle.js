import styled from "styled-components"
export const Icon = styled.div`
font-size: larger;
font-weight: 300;
margin: 10px;
`
export const Container= styled.li`
display: flex;
height: 40px;
width: 500px;
border-radius: 2px;
border: 1px solid gray;
justify-content: space-between;
align-items: center;
padding: 5px;
margin: 5px;
cursor: pointer;
text-decoration: none;
background: ${(props) =>
    props.checked === true
      ? 'lightgreen'
      : 'white'}
`

export const Action= styled.div`

display: flex;
justify-content: center;
align-self: center;
`

export const Title= styled.p`
`