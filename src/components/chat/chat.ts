import chatTmpl from './chat.tmpl';
import Block from '../../Utils/Block';
import './chat.scss';

export default class Chat extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		if (this.props.last_message) {
			const date = new Date(this.props.last_message.time);
			const time = date.toLocaleTimeString();
			const day = date.toLocaleDateString();
			this.props.datetime = `${time} ${day}`;
			this.setProps(this.props);
		}
	}

	public render() {
		return this.compile(chatTmpl, this.props);
	}
}
