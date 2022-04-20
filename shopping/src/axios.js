import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/shopper-stop-8a21f/us-central1/api'
});

export default instance;