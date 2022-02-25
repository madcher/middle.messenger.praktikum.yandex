import {ValidationFields as data} from '../consts';

export const render = (tag: string, block: HTMLElement) => {
	const root = document.querySelector(tag) as HTMLElement;
	if (root.firstChild) {
		root.removeChild(root.firstChild);
	}
	root.appendChild(block);
	return root;
};

export const css = (el: any, styles: Record<string, any> = {}) => {
	Object.keys(styles).forEach((key) => {
		el.style[key] = styles[key];
	});
};

export class FormValidator {
	errorField: HTMLElement;
	password: string;
	output: Record<string, any>;

	inputCheck = (value: string, name: string) => {
		let validationResult = '';

		if (data[name]) {
			const re = data[name].re;
			if (!re) {
				return '';
			}
			validationResult = re.test(value) ? '' : data[name]?.message;
		}
		if (this.errorField) {
			this.errorField.innerHTML = validationResult;
		}
		return validationResult;
	};

	passwordCheck = (value: string, name: string) => {
		if (this.password === value) {
			this.errorField.innerHTML = '';
		} else {
			this.errorField.innerHTML = data[name]?.message;
		}
	};

	onSubmitButtonClick = (e: Event, formName: string, callback: any) => {
		e.preventDefault();
		this.output = {};
		let isError = false;

		const form = document.querySelector(`[name = ${formName}]`);
		const fields = form.querySelectorAll('input');

		fields.forEach((input) => {
			if (input.type !== 'submit') {
				if (input.value !== '') {
					this.output[input.name] = input.value;
				} else {
					input.classList.add('error');
				}
			}
		});
		Object.keys(this.output).forEach((key) => {
			const val = this.inputCheck(this.output[key], key);
			if (val) {
				isError = true;
			}
		});

		if (!isError) {
			callback(this.output);
			// console.log(this.output);
			// window.location.hash = '#chats';
		}
	};

	onInput = (target: any) => {
		target.getAttribute('name') === 'password_confirm'
			? ''
			: this.inputCheck(target.value, target.name);
	};

	onInputClick = (target: any, name: string) => {
		this.errorField = document.querySelector(`[data-name=${name}]`);

		target.classList.remove('error');

		if (name === 'password_confirm') {
			const passwordField = document.querySelector(`[data-name=${name}]`) as HTMLInputElement;
			this.password = passwordField.value;
		}
	};
}
