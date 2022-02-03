import loginTmpl from './Login.tmpl';
import { LOGIN_DATA } from './Login.data';
import Block from '../../Utils/Block';
import './Login.scss';

export default class Login extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.setProps(LOGIN_DATA);
	}

	public render() {
		return this.compile(loginTmpl, this.props);
	}
}
