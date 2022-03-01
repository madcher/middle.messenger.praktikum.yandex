import chatTmpl from './chat.tmpl';
import Block from '../../Utils/Block';
import './chat.scss';

export default class Chat extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		if (this.props.last_message) {
			const time = new Date(this.props.last_message.time).toLocaleTimeString();
			const day = new Date(this.props.last_message.time).toLocaleDateString();
			this.props.datetime = `${time} ${day}`;
			this.setProps(this.props);
		}
	}

	public render() {
		return this.compile(chatTmpl, this.props);
	}
}
