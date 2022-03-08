import chatMessagesFieldTmpl from './ChatMessagesField.tmpl';
import Block from '../../../Utils/Block';
import {userController} from '../../../Controllers/userController';
import {store} from '../../../store/store';
import './ChatMessagesField.scss';

type TResponse = { [key: string]: any };

export default class ChatMessagesField extends Block {
	constructor(props?: any) {
		super(props);
		store.subscribe({'messages_received': this});
		store.subscribe({'select_chat': this});
	}

	storeChanged(key: any) {
		const parent = document.querySelector('.messages-field');
		const chat = store.getState().chat;
		const userID = store.getState().user.id;

		if (key === 'select_chat') {
			return parent.innerHTML = '';
		}
		if (chat.messages.length) {
			chat.messages.reverse().forEach((message: any) => {
				this.addMessage(message, userID, parent);
			});
		} else {
			this.addMessage(chat.messages, userID, parent);
		}
	}

	addMessage(message: any, userID: any, parent: any) {
		if (message.type === 'message') {
			if (message.user_id === userID) {
				parent.appendChild(this.createMessage(message.content, 'sent'));
			} else {
				parent.appendChild(this.createMessage(message.content, 'received'));
			}
		}
		if (message.type === 'user connected') {
			parent.appendChild(this.createSystemMessage(message.content));
		}
	}

	createMessage(text: any, className: any) {
		const newMessage = document.createElement('div');
		newMessage.innerText = text;
		newMessage.classList.add('messages-field__message');
		newMessage.classList.add(className);
		return newMessage;
	}

	createSystemMessage(id: any) {
		const newMessage = document.createElement('div');
		newMessage.classList.add('messages-field__sys-message');
		userController.userById(id)
			.then((res: TResponse) => {
				newMessage.innerText =
            `Подключился пользователь: ${res.response.first_name} ${res.response.second_name}`;
			});
		return newMessage;
	}

	public render() {
		return this.compile(chatMessagesFieldTmpl, this.props);
	}
}
