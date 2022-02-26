import MessageField from '../../components/message-field/message-field';
import MainButton from '../../components/main-button/main-button';
import {FormValidator} from '../../utils/utils';

const validator = new FormValidator();

const MAIN_BUTTON = {
	className: 'chats__message-send',
	title: 'Отправить',
	events: {
		click: (e: Event) => validator.onSubmitButtonClick(e, MESSAGE_FIELD.name),
	},
};

const MESSAGE_FIELD = {
	name: 'message',
	message: 'message',
	mainButton: new MainButton(MAIN_BUTTON),
};

export const CHATS_DATA = {
	chat: [
		{
			user: 'Андрей',
			message: 'Всем привет!',
			datetime: '',
			time: '12:13',
		},
		{
			user: 'Илья',
			message: 'Всем пока!',
			datetime: '',
			time: '09:20',
		},
		{
			user: 'Вадим',
			message: 'Всем привет!',
			datetime: '',
			time: 'Пт',
		},
		{
			user: 'Стас',
			message: 'Всем пока!',
			datetime: '',
			time: 'Чт',
		},
		{
			user: 'Иван',
			message: 'Всем привет!',
			datetime: '',
			time: '2 февраля 2022',
		},
		{
			user: 'Андрей',
			message: 'Всем пока!',
			datetime: '',
			time: '10:49',
		},
		{
			user: 'Илья',
			message: 'Всем привет!',
			datetime: '',
			time: '09:20',
		},
		{
			user: 'Вадим',
			message: 'Всем пока!',
			datetime: '',
			time: 'Пт',
		},
		{
			user: 'Стас',
			message: 'Всем привет!',
			datetime: '',
			time: 'Чт',
		},
		{
			user: 'Иван',
			message: 'Всем пока!',
			datetime: '',
			time: '3 февраля 2022',
		},
	],
	messageField: new MessageField(MESSAGE_FIELD),
};
