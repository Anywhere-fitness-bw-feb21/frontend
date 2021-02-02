import styled from 'styled-components'

export const StyledForm2 = styled.div`

background-color: #BAC7BE;
height: 30vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5rem 10rem;



h1{
  margin-bottom: 2rem;
}
label{
margin-left: 1rem;
}


input{
  background-color: #C2E1C2;
  margin-left: 1rem;
  border: none;
  line-height: 1.4rem;
  outline: none;
}
p{
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 1rem;
  text-decoration: none;
}
.signUp{
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: 1rem;
  padding: 0;
  text-decoration: none;
  text-decoration: underline;
  color: #778472;
}
.loginBtn{
  margin-left: 1rem;
}
@media (max-width:920px){
    text-align:center ;
    width: 100%;
    margin: 7rem 0;
    padding: 4rem 0;
   form{
       display:flex;
       flex-direction: column;
   }
  
  label{
      margin-bottom: 1rem;
  }
}
`