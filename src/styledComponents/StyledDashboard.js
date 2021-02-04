import styled from 'styled-components'

export const StyledDashboard  = styled.div`
display: flex;
flex-direction: column;


form, .class{
    box-shadow: 2px 2px lightgray;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color:  #BAC7BE;
    border-radius: 5px;
}
form div{
   margin: 1%;
}
.button-group{
    align-self:center;
    width: 80%;
    height: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
input{
    width: 100%;
    height: 2rem;
    outline: none;
    border-radius: 5px;
    box-shadow: 3px 3px lightgray;
    background-color: #C2E1C2; 
}
form div:first-of-type{
    width: 50%;
    align-self: center;
}
form div button{
width:30%;
padding: 1.2% 0;
border-radius: 5px;
font-size: 1rem;
color: dimgray;
box-shadow: 2px 2px lightgray;
outline: none;
}

 button:hover{
    background-color: silver;
}

h3{
    text-align:center;
    font-size: 1.5rem;
}
.classes{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
 .class{
    display:flex;
    flex-direction:column;
    background-color:  #BAC7BE;
    width: 19%;
    text-align: center;
    line-height: 0.7rem;
    border-radius:5px;
    justify-content: space-between;
    margin-bottom: 5%;
}

h5{
    font-size: 1rem;
}
h4{
    font-size: 1.3rem;
}
h5,h4,p{
    margin: 5%;
}
.class button{
  padding: 5% 0;
  color: dimgray;
  font-size: 1rem;
  outline: none;
}
@media(max-width:1050px){
    .class{
        width: 31%;
    }
}

@media(max-width:800px){
    .button-group{
        width: 95%;
    }
    form div button{
        width: 32%
    }
}
@media(max-width:655px){
    .class{
        width: 45%;
    }
   
   .button-group button{
     width: 45%;
    }
}
@media(max-width:450px){
    .class{
        width: 95%;
    }
    .button-group{
        flex-direction: column;
        align-items: center;
    }
    .button-group button{
     width: 60%;
    }
}
`