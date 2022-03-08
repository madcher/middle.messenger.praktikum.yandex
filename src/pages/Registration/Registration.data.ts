import Input from '../../components/input/input';
import MainButton from '../../components/main-button/main-button';
import SecondaryButton from '../../components/secondary-button/secondary-button';

export const INPUTS = {
	EMAIL: {
		label: 'Почта',
		type: 'email',
		name: 'email',
		id: 'email',
		events: {},
	},
	FIRST_NAME: {
		label: 'Имя',
		type: 'text',
		name: 'first_name',
		id: 'name',
		events: {},
	},
	SECOND_NAME: {
		label: 'Фамилия',
		type: 'text',
		name: 'second_name',
		id: 'second_name',
		events: {},
	},
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
	PHONE: {
		label: 'Телефон',
		type: 'tel',
		name: 'phone',
		id: 'phone',
		events: {},
	},
	PASSWORD_CONFIRM: {
		label: 'Пароль (еще раз)',
		type: 'password',
		name: 'password_confirm',
		id: 'password_confirm',
		events: {},
	},
};

export const MAIN_BUTTON = {
	title: 'Зарегистрироваться',
	href: '/#chats',
	events: {},
};

export const SECONDARY_BUTTON = {
	title: 'Войти',
	events: {},
};

export const REGISTRATION_DATA = {
	name: 'registration-form',
	title: 'Регистрация',
	email: new Input(INPUTS.EMAIL),
	login: new Input(INPUTS.LOGIN),
	first_name: new Input(INPUTS.FIRST_NAME),
	second_name: new Input(INPUTS.SECOND_NAME),
	phone: new Input(INPUTS.PHONE),
	password: new Input(INPUTS.PASSWORD),
	password_confirm: new Input(INPUTS.PASSWORD_CONFIRM),
	mainButton: new MainButton(MAIN_BUTTON),
	secondaryButton: new SecondaryButton(SECONDARY_BUTTON),
};
