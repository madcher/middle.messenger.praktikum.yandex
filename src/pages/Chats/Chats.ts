import chatsTmpl from './Chats.tmpl';
// import {CHATS_DATA} from './Chats.data';
import Block from '../../Utils/Block';
import '../../components/chat/chat';
import './Chats.scss';
import {chatController} from '../../Controllers/ChatsController';

export default class Chats extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		chatController.getChats(this.setProps);
	}

	public render() {
		return this.compile(chatsTmpl, this.props);
	}
}
