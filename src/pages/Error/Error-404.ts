import errorTmpl from './Error.tmpl';
import { ERROR404_DATA } from './Error.data';
import Block from '../../Utils/Block';
import './Error.scss';

export default class Error404 extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.setProps(ERROR404_DATA);
	}

	public render() {
		return this.compile(errorTmpl, this.props);
	}
}
