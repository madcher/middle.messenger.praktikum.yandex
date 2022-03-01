import registrationTmpl from './Registration.tmpl';
import Block from '../../Utils/Block';
import {FormValidator} from '../../Utils/utils';
import {REGISTRATION_DATA, INPUTS, MAIN_BUTTON, SECONDARY_BUTTON} from './Registration.data';
import {registrationController} from '../../Controllers/RegistrationController';
import {router} from '../../index';
import {isEmptyObject} from '../../Utils/utils';
import './Registration.scss';


export default class Registration extends Block {
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
				const data = this.validator.onSubmitButtonClick(e, REGISTRATION_DATA.name);
				if (isEmptyObject(data)) {
					await registrationController.signUp(data);
				}
			},
		};

		SECONDARY_BUTTON.events = {
			click: (e: any) => {
				e.preventDefault();
				router.go('/sign-up');
			},
		};

		this.setProps(REGISTRATION_DATA);
	}

	public render() {
		return this.compile(registrationTmpl, this.props);
	}
}
