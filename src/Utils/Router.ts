import {registrationController} from '../Controllers/RegistrationController';
import {chatController} from '../Controllers/ChatsController';
import {store} from '../store/store';
import {loadChats, setUser} from '../store/reducers';

function isEqual(lhs: any, rhs: any) {
	return lhs === rhs;
}

const render = (tag: string, block: HTMLElement) => {
	const root = document.querySelector(tag) as HTMLElement;
	root.innerHTML = '';
	root.appendChild(block);
	return root;
};

class Route {
	private _pathname: string;
	private _blockClass: any;
	private _block: any;
	_props: any;

	constructor(pathname: string, view: any, props: Record<string, any>) {
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
			return render(this._props.rootQuery, this._block.getContent());
		}

		render(this._props.rootQuery, this._block.render());
	}
}

class Router {
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

	use(pathname: string, block: any) {
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

	_onRoute(pathname: string) {
		this.checkRoute(pathname).then(() => {
			let route = this.getRoute(pathname);

			if (!route) {
				route = this.getRoute('/error');
			}

			if (this._currentRoute) {
				this._currentRoute.leave();
			}

			this._currentRoute = route;
			route.render();
		});
	}


	async checkRoute(pathname: string) {
		if (pathname === '/' || pathname === '/sign-up') {
			await registrationController.getUserInfo().then(async (res: Record<string, any>) => {
				store.dispatch(setUser(res.response));
				if (res.status >= 200 && res.status < 400) {
					console.log('user', res.response);
					await chatController.getChatInfo().then((res: Record<string, any>) => {
						store.dispatch(loadChats(res.response));
						this.go('/messenger');
					});
				}
			});
		}
		if (
			pathname === '/settings' ||
			pathname === '/messenger' ||
			pathname === '/settings/change-password'
		) {
			await registrationController.getUserInfo().then(async (res: Record<string, any>) => {
				if (res.status > 400) {
					this.go('/');
				}
				if (res.status >= 200 && res.status < 400) {
					store.dispatch(setUser(res.response));
					await chatController.getChatInfo().then((res: Record<string, any>) => {
						store.dispatch(loadChats(res.response));
					});
				}
			});
		}
		return;
	}

	go(pathname: string) {
		this.history.pushState({}, '', pathname);
		this._onRoute(pathname);
	}

	back() {
		this.history.back();
	}

	forward() {
		this.history.forward();
	}

	getRoute(pathname: string) {
		return this.routes.find((route: string) => route.match(pathname));
	}
}

export default Router;
