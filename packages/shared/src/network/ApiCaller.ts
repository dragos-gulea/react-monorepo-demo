import AxiosInstance                from './Interceptor';
import Config                       from '../config';
import StorageToken                 from '../storage/StorageToken';
import {AxiosResponse, AxiosStatic} from 'axios';

class ApiCaller {

    readonly baseUrl: string;

    private storageToken: StorageToken;
    private interceptor : AxiosStatic;
    private endpoint    : string | null = null;
    private method      : string | null = null;
    private params      : {} = {};

    constructor() {
        this.baseUrl      = Config.BASE_URL;
        this.storageToken = new StorageToken();
        this.interceptor  = AxiosInstance;
    }

    /**
     *
     * @param endpoint
     * @returns {ApiCaller}
     */
    setEndpoint(endpoint: string) {
        this.endpoint = endpoint;

        return this;
    }

    /**
     *
     * @param params
     * @returns {ApiCaller}
     */
    setParams(params: {}) {
        this.params = params;

        return this;
    }

    private setMethod(method: string) {
        this.method = method;

        return this;
    }

    async get() {
        return this._call('get');
    }

    async post() {
        return this._call('post');
    }

    async put() {
        return this._call('put');
    }

    async delete() {
        return this._call('delete');
    }

    private async buildHeaders() {
        let headers: {[k: string]: string} = {
            'Accept'      : 'application/json',
            'Content-Type': 'application/json',
            'Platform'    : 'Android',
            'AppVersion'  : '100.01',
        };

        const token = await this.storageToken.fetch();

        if (token) {
            headers['Authorization'] = 'Bearer ' + token;
        }

        return headers;
    }

    private async _call(method: string) {
        return this
            .setMethod(method)
            .resolveRequestPromise()
            .then((response: AxiosResponse) => {
                return response.data;

            }).catch((error: unknown) => {
                console.log('axios error: ' + error);

                throw error;
            });
    }

    private async resolveRequestPromise() {
        const headers = await this.buildHeaders();
        const url     = this.baseUrl + this.endpoint;

        if (this.method === 'post') {
            return this.interceptor.post(url, this.params, {headers});
        }

        if (this.method === 'put') {
            return this.interceptor.put(url, this.params, {headers});
        }

        if (this.method === 'delete') {
            return this.interceptor.post(url, this.params, {headers});
        }

        return this.interceptor.get(url, {headers});
    }
}

export default ApiCaller;
