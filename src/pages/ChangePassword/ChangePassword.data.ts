import Input from '../../components/input/input';
import MainButton from '../../components/main-button/main-button';

export const INPUTS = {
	OLD_PASSWORD: {
		label: 'Старый пароль',
		value: '',
		type: 'password',
		name: 'oldPassword',
		id: 'old_password',
		events: {},
	},
	NEW_PASSWORD: {
		label: 'Новый пароль',
		value: '',
		type: 'password',
		name: 'newPassword',
		id: 'new_password',
		events: {},
	},
};

export const SAVE_PASSWORD = {
	title: 'Сохранить',
	className: 'profile__info-save-password',
	events: {},
};

export const PROFILE_PASSWORD_DATA = {
	name: 'profile-password-form',
	username: '',
	oldPassword: new Input(INPUTS.OLD_PASSWORD),
	newPassword: new Input(INPUTS.NEW_PASSWORD),
	savePassword: new MainButton(SAVE_PASSWORD),
};
