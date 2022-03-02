import charHeaderTmpl from './ChatHeader.tmpl';
import Block from '../../../Utils/Block';
import {ADD_USER} from '../Chat.data';
import {chatController} from '../../../Controllers/ChatsController';
import {userController} from '../../../Controllers/userController';
import {router} from '../../../index';
import './ChatHeader.scss';

export default class ChatHeader extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.props.events = {
			click: async (e: MouseEvent) => {
				e.preventDefault();
				const target = e.target as HTMLElement;
				if (target.closest('span.icon-more')) {
					const options = document.querySelector('.chat-header__options');
					options.classList.toggle('show');
				}

				if (target.hasAttribute('data-delete-chat')) {
					const selectedChatId =
						Number((target.closest('.chat-header') as HTMLElement).dataset.selectedChat);
					await chatController.deleteChat({
						chatId: selectedChatId,
					});

					router.go('/messenger');
				}

				if (target.hasAttribute('data-add-user')) {
					const userInput = document.querySelector('.chat-header__add-user');
					userInput.classList.toggle('show');
				}
			},
		};

		ADD_USER.events = {
			click: async (e: MouseEvent) => {
				e.preventDefault();
				const target = e.target as HTMLElement;
				const selectedChatId =
					Number((target.closest('.chat-header') as HTMLElement).dataset.selectedChat);
				const options = target.closest('.chat-header__options');
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
