
function isEqual(lhs: any, rhs: any) {
	return lhs === rhs;
}

function render(query: any, block: any) {
	const root = document.querySelector(query);
	if (root.firstChild) {
		root.removeChild(root.firstChild);
	}
	root.appendChild(block.getContent());
	return root;
}

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
		if (!this._block) {
			this._block = new this._blockClass();
			render(this._props.rootQuery, this._block);
			return;
		}

		this._block.show();
	}
}

export default class Router {
	routes: any;
	history: any;
	_currentRoute: any;
	_rootQuery: any;
	__instance: any;

	constructor(rootQuery: any) {
		if (this.__instance) {
			return this.__instance;
		}

		this.routes = [];
		this.history = window.history;
		this._currentRoute = null;
		this._rootQuery = rootQuery;

		this.__instance = this;
	}

	use(pathname: any, block: any) {
		const route = new Route(pathname, block, {rootQuery: this._rootQuery});
		this.routes.push(route);
		return this._onRoute(pathname);
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
		if (!route) {
			return;
		}

		if (this._currentRoute) {
			this._currentRoute.leave();
		}
		this._currentRoute = route;
		route.render(route, pathname);
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
