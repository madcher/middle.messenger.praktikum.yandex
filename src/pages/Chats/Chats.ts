import chatsTmpl from './Chats.tmpl';
import { CHATS_DATA } from './Chats.data';
import Block from '../../Utils/Block';
import '../../components/chat/chat';
import './Chats.scss';

export default class Chats extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.setProps(CHATS_DATA);
	}

	public render() {
		return this.compile(chatsTmpl, this.props);
	}
}
