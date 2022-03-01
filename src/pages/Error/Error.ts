import errorTmpl from './Error.tmpl';
import Block from '../../Utils/Block';
import {ERROR_DATA} from './Error.data';
import './Error.scss';

export default class Error extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.setProps(ERROR_DATA);
	}

	public render() {
		return this.compile(errorTmpl, this.props);
	}
}
