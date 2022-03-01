import ChatMessageInput from './components/ChatMessageInput/ChatMessageInput';
import ChatList from './components/СhatList/ChatList';
import ChatMessagesField from './components/ChatMessagesField/ChatMessagesField';
import ChatHeader from './components/ChatHeader/ChatHeader';
import MainButton from '../../components/main-button/main-button';
import SecondaryButton from '../../components/secondary-button/secondary-button';


export const MAIN_BUTTON = {
	className: 'chats__message-send',
	title: 'Отправить',
	events: {},
};

export const TO_PROFILE = {
	className: 'chats__profile-link',
	title: 'Профиль',
	icon: true,
	events: {},
};

export const ADD_CHAT = {
	className: 'chats__add-chat-link',
	title: 'Добавить чат',
	events: {},
};

export const CREATE_NAME_CHAT = {
	className: 'chats__add-chat-button',
	title: 'Создать',
	events: {},
};

export const MESSAGE_FIELD = {
	name: 'chats-form',
	message: 'message',
	mainButton: new MainButton(MAIN_BUTTON),
};

export const CHAT_LIST: any = {
	chats: [],
	events: {},
};

export const ADD_USER = {
	className: 'add-user__button',
	title: 'Добавить',
	events: {},
};

const CHAT_HEADER = {
	addUserButton: new MainButton(ADD_USER),
	events: {},
};

export const CHATS_DATA = {
	chatList: new ChatList(CHAT_LIST),
	addChatButton: new SecondaryButton(ADD_CHAT),
	toProfileButton: new SecondaryButton(TO_PROFILE),
	createNameChatButton: new MainButton(CREATE_NAME_CHAT),
	chatHeader: new ChatHeader(CHAT_HEADER),
	chatMessagesField: new ChatMessagesField(),
	chatMessageInput: new ChatMessageInput(MESSAGE_FIELD),
};
