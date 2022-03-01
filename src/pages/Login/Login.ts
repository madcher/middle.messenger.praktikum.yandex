import loginTmpl from './Login.tmpl';
import Block from '../../Utils/Block';
import {FormValidator} from '../../Utils/utils';
import {LOGIN_DATA, INPUTS, MAIN_BUTTON, SECONDARY_BUTTON} from './Login.data';
import {registrationController} from '../../Controllers/RegistrationController';
import {router} from '../../index';
import {isEmptyObject} from '../../Utils/utils';
import './Login.scss';

export default class Login extends Block {
	validator: FormValidator;

	constructor(props?: any) {
		super(props);
		this.validator = new FormValidator();
	}

	componentDidMount() {
		Object.values(INPUTS).forEach((value) => {
			return value.events = {
				click: (e: any) => this.validator.onInputClick(e.target, value.name),
				input: (e: any) => this.validator.onInput(e.target),
			};
		});

		MAIN_BUTTON.events = {
			click: async (e: any) => {
				e.preventDefault();
				const data = this.validator.onSubmitButtonClick(e, LOGIN_DATA.name);
				if (isEmptyObject(data)) {
					await registrationController.signIn(data);
				}
			},
		};

		SECONDARY_BUTTON.events = {
			click: async (e: any) => {
				e.preventDefault();
				router.go('/sign-up');
			},
		};

		this.setProps(LOGIN_DATA);
	}

	public render() {
		return this.compile(loginTmpl, this.props);
	}
}
