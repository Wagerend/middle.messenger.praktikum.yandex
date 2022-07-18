import { queryStringify } from "./queryStringify";

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

type Method = (url: string, options?: any) => Promise<unknown>;
type Request = (url: string, options?: any, timeout?: number) => Promise<unknown>;


class HTTPTransport {
    private host: string;

    constructor(host: string){
        this.host = host;
    }

	public get: Method = (url, options = {}) => {
		url = url.concat(queryStringify(options.data));
		return this.request(url, {...options, method: METHODS.GET}, options.timeout);
	};
    public post: Method = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.POST}, options.timeout);
	};
    public put: Method = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
	};
    public delete: Method = (url, options = {}) => {
		return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
	};

	private request: Request = (url, options, timeout = 5000) => {
        const { method, data, header = {}} = options;
        const headSetting = Object.entries(header);

        return new Promise((resolve, reject)=>{
            if(!method){
                reject('Method not found');
            }     

            //@ts-ignore
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            for(const item of headSetting){
                xhr.setRequestHeader(`${item[0]}`,`${item[1]}`)
            }
            xhr.onload = function(){
                resolve(xhr);
            };
            xhr.timeout = timeout;

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if(method === METHODS.GET || !data){
                xhr.send();
            } else {
                xhr.send(data);
            }
        });

	};
}

export const http = new HTTPTransport('https://ya-praktikum.tech/api/v2');