
function isEqual(lhs: any, rhs: any) {
	return lhs === rhs;
}

const render = (tag: string, block: any) => {
	const root = document.querySelector(tag) as HTMLElement;
	root.innerHTML = '';
	root.appendChild(block);
	return root;
};

class Route {
	private _pathname: any;
	private _blockClass: any;
	private _block: any;
	_props: any;

	constructor(pathname: any, view: any, props: any) {
		this._pathname = pathname;
		this._blockClass = view;
		this._block = null;
		this._props = props;
	}

	navigate(pathname: any) {
		if (this.match(pathname)) {
			this._pathname = pathname;
			this.render();
		}
	}

	leave() {
		if (this._block) {
			this._block.hide();
		}
	}

	match(pathname: any) {
		return isEqual(pathname, this._pathname);
	}

	render() {
		console.log('render');
		if (!this._block) {
			this._block = new this._blockClass();
			return render(this._props.rootQuery, this._block.getContent());
		}

		render(this._props.rootQuery, this._block.render());
	}
}

export default class Router {
	routes: any;
	history: any;
	_currentRoute: any;
	_rootQuery: any;
	private static __instance: Router

	constructor(rootQuery: any) {
		if (Router.__instance) {
			Router.__instance._rootQuery = rootQuery;
			return Router.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;

		Router.__instance = this;
	}

	use(pathname: any, block: any) {
		const route = new Route(pathname, block, {rootQuery: this._rootQuery});
		this.routes.push(route);
		return this;
	}

	start() {
		// Реагируем на изменения в адресной строке и вызываем перерисовку
		window.onpopstate = (event: any) => {
			this._onRoute(event.currentTarget.location.pathname);
		};

		this._onRoute(window.location.pathname);
	}

	_onRoute(pathname: any) {
		const route = this.getRoute(pathname);
		console.log(route);
		if (!route) {
			return;
		}

		if (this._currentRoute) {
			this._currentRoute.leave();
		}
		this._currentRoute = route;
		console.log(this._currentRoute);
		route.render();
	}

	go(pathname: any) {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname);
	}

	back() {
		this.history.back();
	}

	forward() {
		this.history.forward();
	}

	getRoute(pathname: any) {
		return this.routes.find((route: any) => route.match(pathname));
	}
}
