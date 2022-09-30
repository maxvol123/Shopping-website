import axios from "axios";
const instance = axios.create({
    baseURL:"http://localhost:777",

})
export default instance 