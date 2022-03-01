import messageFieldTmpl from './ChatMessageInput.tmpl';
import Block from '../../../../Utils/Block';
import {MAIN_BUTTON, MESSAGE_FIELD} from '../../Chats.data';
import {webSocketAPI} from '../../../../Utils/WebSocket';
import './ChatMessageInput.scss';

export default class ChatMessageInput extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		MAIN_BUTTON.events = {
			click: (e: any) => {
				e.preventDefault();
				const input = document.querySelector('#message') as HTMLInputElement;

				if (input.value) {
					console.log('yes');
					webSocketAPI.socket.send(JSON.stringify({
						content: input.value,
						type: 'message',
					}));
				}

				input.value = '';
			},
		};

		this.setProps(MESSAGE_FIELD);
	}

	public render() {
		return this.compile(messageFieldTmpl, this.props);
	}
}
