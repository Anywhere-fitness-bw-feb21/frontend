import styled from "styled-components"

export const StyledForm = styled.div`

background-color: #BAC7BE;
/* height: 40vh; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60%;
margin: 10rem auto;
padding: 1.5rem 0;
h1{

}
label{
  font-size: 1rem;
}
p{
  color: red;
}

input{
  background-color: #C2E1C2;
  margin-left: 1rem;
  border: none;
  line-height: 1.4rem;
  outline: none;
}

.submitBtn{
  margin-top: 1rem;
  margin-left: 5rem;
  font-size: 1rem;
  outline: none;
}

.radioInput{
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
}

@media(max-width:640px){
    width: 100%;
}
  
`