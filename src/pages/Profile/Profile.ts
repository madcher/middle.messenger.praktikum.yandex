import profileTmpl from './Profile.tmpl';
import Block from '../../Utils/Block';
import {FormValidator} from '../../Utils/utils';
import {
	EXIT_BUTTON,
	PROFILE_DATA,
	INPUTS,
	CHANGE_DATA,
	SAVE_DATA,
	CHANGE_PASSWORD, AVATAR_DATA,
} from './Profile.data';
import {registrationController} from '../../Controllers/RegistrationController';
import {userController} from '../../Controllers/userController';
import {store} from '../../store/store';
import {router} from '../../index';
import {isEmptyObject, toLowerCase} from '../../Utils/utils';
import './Profile.scss';

export default class Profile extends Block {
	validator: FormValidator;

	constructor(props?: any) {
		super(props);
		this.validator = new FormValidator();
		store.subscribe({'user_changed': this});
	}

	componentDidMount() {
		const data = store.getState().user;

		AVATAR_DATA.events = {
			change: (e: any) => {
				const formInput = e.target.closest('.profile__avatar');
				const form = new FormData(formInput);

				userController.changeAvatar(form).then(() => {
					router.go('/settings');
				});
			},
		};

		EXIT_BUTTON.events = {
			click: async (e: any) => {
				e.preventDefault();
				await registrationController.logout();
			},
		};

		CHANGE_DATA.events = {
			click: (e: any) => {
				e.preventDefault();
				const profile = document.querySelector('.profile__info');
				profile.classList.add('change');
			},
		};

		CHANGE_PASSWORD.events = {
			click: (e: any) => {
				e.preventDefault();
				router.go('/settings/change-password');
			},
		};

		SAVE_DATA.events = {
			click: async (e: any) => {
				e.preventDefault();
				const profile = document.querySelector('.profile__info');
				const data = this.validator.onSubmitButtonClick(e, PROFILE_DATA.name);

				if (isEmptyObject(data)) {
					await userController.changeProfile(data);
				}

				profile.classList.remove('change');
			},
		};

		if (data) {
			this.changeProps(data);
		}

		this.setProps(PROFILE_DATA);
	}

	storeChanged() {
		const data = store.getState().user;

		if (data) {
			this.changeProps(data);
		}

		this.setProps(PROFILE_DATA);
	}

	changeProps(data: any) {
		Object.entries(INPUTS).forEach(([key, value]) => {
			return value.value = data[toLowerCase(key)];
		});

		PROFILE_DATA.username = `${data.first_name} ${data.second_name}`;
		AVATAR_DATA.avatar = data.avatar;
	}

	public render() {
		return this.compile(profileTmpl, this.props);
	}
}
