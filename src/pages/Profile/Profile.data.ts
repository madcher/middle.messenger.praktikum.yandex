import Input from '../../components/input/input';
import SecondaryButton from '../../components/secondary-button/secondary-button';
import { FormValidator } from '../../Utils/utils';

const validator = new FormValidator();

const EMAIL = {
	label: 'Почта',
	value: 'test@yandex.ru',
	type: 'email',
	name: 'email',
	id: 'mail',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, EMAIL.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

const FIRST_NAME = {
	label: 'Имя',
	value: 'Иван',
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
	value: 'Иванов',
	type: 'text',
	name: 'second_name',
	id: 'second_name',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, SECOND_NAME.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

const DISPLAY_NAME = {
	label: 'Имя в чате',
	value: 'Иван Иванов',
	type: 'text',
	name: 'display_name',
	id: 'display_name',
};

const LOGIN = {
	label: 'Логин',
	value: 'ivanivanov',
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
	value: '+7 (123) 456 78 90',
	type: 'tel',
	name: 'phone',
	id: 'phone',
	events: {
		click: (e: Event) => validator.onInputClick(e.target, PHONE.name),
		input: (e: Event) => validator.onInput(e.target),
	},
};

const CHANGE_DATA = {
	title: 'Изменить данные',
	href: '/#error-404',
};

const CHANGE_PASSWORD = {
	title: 'Изменить пароль',
	href: '/#error-404',
};

const EXIT = {
	title: 'Выйти',
	href: '/#login',
};

export const PROFILE_DATA = {
	username: 'Иван',
	avatar: 'И',
	nameAvatar: 'avatar',
	name: 'profile-form',
	email: new Input(EMAIL),
	login: new Input(LOGIN),
	first_name: new Input(FIRST_NAME),
	second_name: new Input(SECOND_NAME),
	display_name: new Input(DISPLAY_NAME),
	phone: new Input(PHONE),
	changeData: new SecondaryButton(CHANGE_DATA),
	changePassword: new SecondaryButton(CHANGE_PASSWORD),
	exit: new SecondaryButton(EXIT),
};
