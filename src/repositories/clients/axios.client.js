import axios from 'axios';

const baseDomain = "https://api.lemka.be";
const baseURL = `${baseDomain}/api`;

export default axios.create({
    baseURL
})