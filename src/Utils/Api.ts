import HTTPTransport from './HTTPRequest';

const HTTP = new HTTPTransport();

class Api {
	get = (url: string, options? : any) => {
		return HTTP.get(url, options);
	}

	post = (url: string, options? : any) => {
		console.log(options);
		return HTTP.post(url, options);
	}

	put = (url: string, options? : any) => {
		return HTTP.put(url, options);
	}

	delete = (url: string, options? : any) => {
		return HTTP.delete(url, options);
	}
}

export default Api;
