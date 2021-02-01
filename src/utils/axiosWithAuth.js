
import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    axios.create({
        headers:{
            Authorization: token
        },
        baseURL: "https://anytime-fitness.herokuapp.com/api"
    })
}

export default axiosWithAuth()