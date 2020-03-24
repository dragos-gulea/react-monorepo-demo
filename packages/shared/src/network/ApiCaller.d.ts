declare class ApiCaller {
    readonly baseUrl: string;
    private storageToken;
    private interceptor;
    private endpoint;
    private method;
    private params;
    constructor();
    /**
     *
     * @param endpoint
     * @returns {ApiCaller}
     */
    setEndpoint(endpoint: string): this;
    /**
     *
     * @param params
     * @returns {ApiCaller}
     */
    setParams(params: {}): this;
    private setMethod;
    get(): Promise<any>;
    post(): Promise<any>;
    put(): Promise<any>;
    delete(): Promise<any>;
    private buildHeaders;
    private _call;
    private resolveRequestPromise;
}
export default ApiCaller;
