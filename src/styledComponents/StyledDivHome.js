import styled from 'styled-components'

export const StyledDivHome = styled.div`
background-color: #BAC7BE;
height: 40vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60%;
margin: 0 auto;
padding: 1.5rem 0;
text-align: center;

h1{
font-size: 3rem;
}
h2{
align-items: center;
justify-content:center;
/* margin-left: 3rem; */
}
div{
    width: 40%;
    display: flex;
    justify-content: space-around;
}
button{
/* margin-left: 5rem; */
padding: 0.5rem 0;
width: 70px;
justify-content:center;
align-items: center;
}
@media(max-width: 750px){
    width: 100%;
   
}
@media ( max-width: 400px){
    h1{
        font-size: 2rem;
    }
    h2{
        font-size: 1.2rem;
    }

    div{
        height: 30%;
        flex-direction: column;
        align-items: center;
    }
    
}
`
