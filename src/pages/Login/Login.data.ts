import Input from '../../components/input/input';
import MainButton from '../../components/main-button/main-button';
import SecondaryButton from '../../components/secondary-button/secondary-button';

export const INPUTS = {
	LOGIN: {
		label: 'Логин',
		type: 'text',
		name: 'login',
		id: 'login',
		events: {},
	},
	PASSWORD: {
		label: 'Пароль',
		type: 'password',
		name: 'password',
		id: 'password',
		events: {},
	},
};

export const MAIN_BUTTON = {
	title: 'Авторизоваться',
	events: {},
};

export const SECONDARY_BUTTON = {
	title: 'Нет аккаунта?',
	events: {},
};

export const LOGIN_DATA = {
	name: 'login-form',
	title: 'Вход',
	login: new Input(INPUTS.LOGIN),
	password: new Input(INPUTS.PASSWORD),
	secondaryButton: new SecondaryButton(SECONDARY_BUTTON),
	mainButton: new MainButton(MAIN_BUTTON),
};
