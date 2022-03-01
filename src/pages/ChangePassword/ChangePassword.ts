import profilePasswordTmpl from './ChangePassword.tmpl';
import Block from '../../Utils/Block';
import {FormValidator} from '../../Utils/utils';
import {INPUTS, PROFILE_PASSWORD_DATA, SAVE_PASSWORD} from './ChangePassword.data';
import {userController} from '../../Controllers/userController';
import {store} from '../../store/store';
import {router} from '../../index';
import {isEmptyObject} from '../../Utils/utils';
import './ChangePassword.scss';

export default class ChangePassword extends Block {
	validator: FormValidator;

	constructor(props?: any) {
		super(props);
		this.validator = new FormValidator();
	}

	componentDidMount() {
		const data = store.getState().user;

		INPUTS.NEW_PASSWORD.events = {
			click: (e: any) => this.validator.onInputClick(e.target, INPUTS.NEW_PASSWORD.name),
			input: (e: any) => this.validator.onInput(e.target),
		};

		SAVE_PASSWORD.events = {
			click: async (e: any) => {
				e.preventDefault();
				const data = this.validator.onSubmitButtonClick(e, PROFILE_PASSWORD_DATA.name);

				if (isEmptyObject(data)) {
					await userController.changePassword(data).then(() => {
						router.go('/settings');
					});
				}
			},
		};

		if (data) {
			PROFILE_PASSWORD_DATA.username = `${data.first_name} ${data.second_name}`;
		}

		this.setProps(PROFILE_PASSWORD_DATA);
	}

	public render() {
		return this.compile(profilePasswordTmpl, this.props);
	}
}
