import react from 'react';
import {StyledDivHome} from '../styledComponents/StyledDivHome'
import {Link} from 'react-router-dom'


 function Home(){
    return(
        <StyledDivHome>
        <div>
        <h1>Anywhere Fitness</h1>
        <h2>Focus | Desire | Discipline</h2>

        <Link to="/Login"><button>Login</button></Link>
        <Link to="/Register"><button >Register</button></Link>
        </div>
        </StyledDivHome>
    )



}



export default Home;