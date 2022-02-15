type TData = { [key: string]: any };

interface IOptions {
	method?: string;
	timeout?: number;
	headers?: Record<string, string>;
	data?: TData;
}

const enum METHODS {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

function queryStringify(data: TData) {
	if (typeof data !== 'object' && !data) {
		throw new Error('Data must be object!');
	}
	const keys = Object.keys(data);
	return keys.reduce(
		(result, key, index) => `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`,
		'?',
	);
}

export default class HTTPTransport {
	public get = (url: string, options: IOptions = {}) =>
		this.request(url, { ...options, method: METHODS.GET }, options.timeout);

	public post = (url: string, options: IOptions = {}) =>
		this.request(url, { ...options, method: METHODS.POST }, options.timeout);

	public put = (url: string, options: IOptions = {}) =>
		this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

	public delete = (url: string, options: IOptions = {}) =>
		this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

	private request = (url: string, options: IOptions = {}, timeout = 5000) => {
		const { method, headers = {}, data } = options;

		return new Promise((resolve, reject) => {
			if (!method) {
				reject(new Error('No method provided'));
				return;
			}

			const xhr = new XMLHttpRequest();
			const isGet = method === METHODS.GET;

			xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

			Object.keys(headers).forEach(key => {
				xhr.setRequestHeader(key, headers[key]);
			});

			xhr.onload = () => resolve(xhr);

			xhr.onabort = reject;
			xhr.onerror = reject;

			xhr.timeout = timeout;
			xhr.ontimeout = reject;

			if (isGet || !data) {
				xhr.send();
			} else {
				xhr.send(JSON.stringify(data));
			}
		});
	};
}
