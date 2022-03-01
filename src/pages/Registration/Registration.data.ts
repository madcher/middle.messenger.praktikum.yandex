import Input from '../../components/input/input';
import MainButton from '../../components/main-button/main-button';
import SecondaryButton from '../../components/secondary-button/secondary-button';
import {FormValidator} from '../../Utils/utils';
import {registrationController} from '../../Controllers/RegistrationController';

const validator = new FormValidator();

const EMAIL = {
	label: 'Почта',
	type: 'email',
	name: 'email',
	id: 'email',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, EMAIL.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

const FIRST_NAME = {
	label: 'Имя',
	type: 'text',
	name: 'first_name',
	id: 'name',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, FIRST_NAME.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

const SECOND_NAME = {
	label: 'Фамилия',
	type: 'text',
	name: 'second_name',
	id: 'second_name',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, SECOND_NAME.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

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

const PHONE = {
	label: 'Телефон',
	type: 'tel',
	name: 'phone',
	id: 'phone',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, PHONE.name),
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

const PASSWORD_CONFIRM = {
	label: 'Пароль (еще раз)',
	type: 'password',
	name: 'password_confirm',
	id: 'password_confirm',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, PASSWORD_CONFIRM.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

const MAIN_BUTTON = {
	title: 'Зарегистрироваться',
	href: '/#chats',
	events: {
		click: (e: Event) =>
			validator.onSubmitButtonClick(e, REGISTRATION_DATA.name, registrationController.signUp),
	},
};

const SECONDARY_BUTTON = {
	title: 'Войти',
	href: '/#login',
};

export const REGISTRATION_DATA = {
	title: 'Регистрация',
	name: 'registration-form',
	secondaryButton: new SecondaryButton(SECONDARY_BUTTON),
	mainButton: new MainButton(MAIN_BUTTON),
	email: new Input(EMAIL),
	login: new Input(LOGIN),
	first_name: new Input(FIRST_NAME),
	second_name: new Input(SECOND_NAME),
	phone: new Input(PHONE),
	password: new Input(PASSWORD),
	password_confirm: new Input(PASSWORD_CONFIRM),
};
