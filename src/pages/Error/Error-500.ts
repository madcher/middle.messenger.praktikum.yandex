import errorTmpl from './Error.tmpl';
import { ERROR500_DATA } from './Error.data';
import Block from '../../Utils/Block';
import './Error.scss';

export default class Error500 extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.setProps(ERROR500_DATA);
	}

	public render() {
		return this.compile(errorTmpl, this.props);
	}
}
