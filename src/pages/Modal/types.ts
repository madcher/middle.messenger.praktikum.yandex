type InputFiled = {
	value: string;
};
interface IFormElements {
	email: InputFiled;
	login: InputFiled;
	name: InputFiled;
	surname: InputFiled;
	phone: InputFiled;
	password1?: InputFiled;
	password2?: InputFiled;
	password?: InputFiled;
}

export interface IForm extends Event {
	elements: IFormElements;
}
