import { App } from './index';

type User = {
	login: string;
	password: string;
	email: string;
	name: string;
	surname: string;
	phone: string;
};

interface IState {
	count: number;
	route: string;
	modalOpen: boolean;
	user: User;
	isNotRegistered: boolean;
	isProfileOpen: boolean;
}
const initialState: IState = {
	count: 1,
	route: '',
	modalOpen: false,
	user: null,
	isNotRegistered: false,
	isProfileOpen: false,
};

const update = () => {
	const fn = () => '';
	const content = App || fn;
	const root = document.querySelector('#root');
	root.innerHTML = content();
};

export const _state = new Proxy(initialState, {
	set(target: any, property, value) {
		target[property] = value;
		update();
		return true;
	},
});
