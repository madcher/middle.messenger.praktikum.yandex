import Input from '../../components/input/input';
import MainButton from '../../components/main-button/main-button';
import {FormValidator} from '../../Utils/utils';
import SecondaryButton from '../../components/secondary-button/secondary-button';
import {registrationController} from '../../Controllers/RegistrationController';

const validator = new FormValidator();

const LOGIN = {
	label: 'Логин',
	type: 'text',
	name: 'login',
	id: 'login',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, LOGIN.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

const PASSWORD = {
	label: 'Пароль',
	type: 'password',
	name: 'password',
	id: 'password',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, PASSWORD.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

const MAIN_BUTTON = {
	title: 'Авторизоваться',
	events: {
		click: (e: Event) => validator.onSubmitButtonClick(e, LOGIN_DATA.name, registrationController.signIn),
	},
};

const SECONDARY_BUTTON = {
	title: 'Нет аккаунта?',
	href: '/#registration',
};

export const LOGIN_DATA = {
	title: 'Вход',
	name: 'login-form',
	secondaryButton: new SecondaryButton(SECONDARY_BUTTON),
	mainButton: new MainButton(MAIN_BUTTON),
	login: new Input(LOGIN),
	password: new Input(PASSWORD),
};
