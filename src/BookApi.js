import axios from "axios";

const baseUrl="http://localhost:5000/api/student";
export const getAllBookFromServer=()=>{
    return axios.get(baseUrl);
}
