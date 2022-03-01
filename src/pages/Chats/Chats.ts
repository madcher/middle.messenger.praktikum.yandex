import chatsTmpl from './Chats.tmpl';
import Block from '../../Utils/Block';
import {
	ADD_CHAT,
	CHATS_DATA,
	CREATE_NAME_CHAT,
	TO_PROFILE,
} from './Chats.data';
import {chatController} from '../../Controllers/ChatsController';
import {router} from '../../index';
import './Chats.scss';

export default class Chat extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		TO_PROFILE.events = {
			click: (e: any) => {
				e.preventDefault();
				router.go('/settings');
			},
		};

		ADD_CHAT.events = {
			click: (e: any) => {
				e.preventDefault();
				const addChatField = document.querySelector('.chats__add-field');
				addChatField.classList.toggle('show');
			},
		};

		CREATE_NAME_CHAT.events = {
			click: async (e: any) => {
				e.preventDefault();
				const addChatField = e.target.closest('.chats__add-field');
				const chatInput = addChatField.querySelector('.chats__add-chat-input');

				if (!chatInput.value) {
					return;
				}

				const newChatName = {
					title: chatInput.value,
				};

				await chatController.createChat(newChatName);

				chatInput.value = '';
				addChatField.classList.toggle('show');

				router.go('/messenger');
			},
		};

		this.setProps(CHATS_DATA);
	}

	public render() {
		return this.compile(chatsTmpl, this.props);
	}
}

