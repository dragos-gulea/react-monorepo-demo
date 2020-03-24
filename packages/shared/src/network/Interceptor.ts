import axios, {AxiosStatic} from 'axios';
import Config               from '../config';

const AxiosInstance: AxiosStatic = <AxiosStatic>axios.create({
    baseURL: Config.BASE_URL,
    timeout: 20000
});

AxiosInstance.interceptors.request.use(request => {
    console.log(`REQUEST: ${JSON.stringify(request, null, 2)}`);

    return request;
});

AxiosInstance.interceptors.response.use((response) => {
    console.log(`RESPONSE: ${JSON.stringify(response, null, 2)}`);

    return response;

}, (error) => {
    console.log(`RESPONSE ERROR: ${JSON.stringify(error, null, 2)}`);

    return Promise.reject(error);

});

export default AxiosInstance;
