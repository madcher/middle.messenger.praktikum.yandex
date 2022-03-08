import Input from '../../components/input/input';
import SecondaryButton from '../../components/secondary-button/secondary-button';
import MainButton from '../../components/main-button/main-button';
import Avatar from '../../components/avatar/avatar';

export const INPUTS = {
	EMAIL: {
		label: 'Почта',
		value: '',
		type: 'email',
		name: 'email',
		id: 'mail',
		events: {},
	},
	FIRST_NAME: {
		label: 'Имя',
		value: '',
		type: 'text',
		name: 'first_name',
		id: 'name',
		events: {},
	},
	SECOND_NAME: {
		label: 'Фамилия',
		value: '',
		type: 'text',
		name: 'second_name',
		id: 'second_name',
		events: {},
	},
	DISPLAY_NAME: {
		label: 'Имя в чате',
		value: '',
		type: 'text',
		name: 'display_name',
		id: 'display_name',
		events: {},
	},
	LOGIN: {
		label: 'Логин',
		value: '',
		type: 'text',
		name: 'login',
		id: 'login',
		events: {},
	},
	PHONE: {
		label: 'Телефон',
		value: '',
		type: 'tel',
		name: 'phone',
		id: 'phone',
		events: {},
	},
};

export const AVATAR_DATA = {
	avatar: '',
	nameAvatar: 'avatar',
	events: {},
};

export const CHANGE_DATA = {
	title: 'Изменить данные',
	events: {},
};

export const SAVE_DATA = {
	title: 'Сохранить',
	className: 'profile__info-save',
	events: {},
};

export const CHANGE_PASSWORD = {
	title: 'Изменить пароль',
	events: {},
};

export const EXIT_BUTTON = {
	title: 'Выйти',
	events: {},
};

export const PROFILE_DATA = {
	name: 'profile-form',
	username: '',
	avatar: new Avatar(AVATAR_DATA),
	email: new Input(INPUTS.EMAIL),
	login: new Input(INPUTS.LOGIN),
	first_name: new Input(INPUTS.FIRST_NAME),
	second_name: new Input(INPUTS.SECOND_NAME),
	display_name: new Input(INPUTS.DISPLAY_NAME),
	phone: new Input(INPUTS.PHONE),
	changeData: new SecondaryButton(CHANGE_DATA),
	saveData: new MainButton(SAVE_DATA),
	changePassword: new SecondaryButton(CHANGE_PASSWORD),
	exit: new SecondaryButton(EXIT_BUTTON),
};
