import {router} from '../index';
import Api from '../utils/Api';

const chatApi = new Api();

class ChatController {
	async getChats(setData?: any) {
		try {
			const result = await chatApi.get('/chats');
			if (setData) {
				setData(result);
			}
			return result;
		} catch (e) {
			router.go('/login');
		}
	}

	async signUp(data: any) {
		const {
			// eslint-disable-next-line camelcase
			first_name,
			// eslint-disable-next-line camelcase
			second_name,
			login,
			email,
			password,
			phone,
		} = data;
		const reqData = {
			first_name,
			second_name,
			login,
			email,
			password,
			phone,
		};
		try {
			const result = await chatApi.post('/auth/signup', {data: reqData});
			console.log(result);
			router.go('/chats');
		} catch (e) {
			router.go('/registration');
		}
	}

	async logout() {
		try {
			const result = await chatApi.post('/auth/logout');
			console.log(result);
			router.go('/login');
		} catch (e: any) {
			throw new Error(`Error from AuthController: ${e.message}`);
		}
	}

	async getUserInfo() {
		try {
			const result = await chatApi.get('/auth/user');
			console.log(result);
		} catch (e) {
			return e;
			// throw new Error(`Error from AuthController: ${e.message}`);
		}
	}
}

export const chatController = new ChatController();
