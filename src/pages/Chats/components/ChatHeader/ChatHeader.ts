import charHeaderTmpl from './ChatHeader.tmpl';
import Block from '../../../../Utils/Block';
import {ADD_USER} from '../../Chats.data';
import {chatController} from '../../../../Controllers/ChatsController';
import {userController} from '../../../../Controllers/userController';
import {router} from '../../../../index';
import './ChatHeader.scss';

export default class ChatHeader extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.props.events = {
			click: async (e: any) => {
				e.preventDefault();
				if (e.target.closest('span.icon-more')) {
					const options = document.querySelector('.chat-header__options');
					options.classList.toggle('show');
				}

				if (e.target.hasAttribute('data-delete-chat')) {
					const selectedChatId = Number(e.target.closest('.chat-header').dataset.selectedChat);
					await chatController.deleteChat({
						chatId: selectedChatId,
					});

					router.go('/messenger');
				}

				if (e.target.hasAttribute('data-add-user')) {
					const userInput = document.querySelector('.chat-header__add-user');
					userInput.classList.toggle('show');
				}
			},
		};

		ADD_USER.events = {
			click: async (e: any) => {
				e.preventDefault();
				const selectedChatId = Number(e.target.closest('.chat-header').dataset.selectedChat);
				const options = e.target.closest('.chat-header__options');
				const inputUsername = document.querySelector('.add-user__input') as HTMLInputElement;

				if (inputUsername.value !== '') {
					const user: any = await userController.searchUser({
						login: inputUsername.value,
					});

					await chatController.addUser({
						users: [user[0].id],
						chatId: selectedChatId,
					});

					options.classList.toggle('show');
				}
			},
		};
	}

	public render() {
		return this.compile(charHeaderTmpl, this.props);
	}
}
