import { queryStringify } from "../../utils";

const METHODS = {
	GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

class HTTPTransport {
		get = (url, options:Record<string,any> = {}) => {
				url = url.concat(queryStringify(options.data));
				return this.request(url, {...options, method: METHODS.GET}, options.timeout);
		};
        post = (url, options:Record<string,any> = {}) => {
				return this.request(url, {...options, method: METHODS.POST}, options.timeout);
		};
        put = (url, options:Record<string,any> = {}) => {
				return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
		};
        delete = (url, options:Record<string,any> = {}) => {
				return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
		};

		request = (url, options, timeout = 5000) => {
			const { method, data, header = {}} = options;
            const headSetting = Object.entries(header);
            return new Promise((resolve, reject)=>{
              if(!method){
                reject('Method not found');
              }
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