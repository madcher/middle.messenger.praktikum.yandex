import registrationTmpl from './Registration.tmpl';
import { REGISTRATION_DATA } from './Registration.data';
import Block from '../../Utils/Block';
import './Registration.scss';

export default class Registration extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.setProps(REGISTRATION_DATA);
	}

	public render() {
		return this.compile(registrationTmpl, this.props);
	}
}
