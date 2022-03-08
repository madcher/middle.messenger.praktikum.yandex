import Api from '../Utils/Api';

class ChatsAPI extends Api {
	createChat(data: Record<string, any>) {
		return this.post('/chats', {data});
	}

	addUser(data: Record<string, any>) {
		return this.put('/chats/users', {data});
	}

	deleteChat(data: Record<string, any>) {
		return this.delete('/chats', {data});
	}

	getChats(data: Record<string, any>) {
		return this.get('/chats', {data});
	}

	getToken(id: Record<string, any>) {
		return this.post(`/chats/token/${id}`);
	}
}
const chatApi = new ChatsAPI();

class ChatController {
	async createChat(data: Record<string, any>) {
		try {
			return await chatApi.createChat(data);
		} catch (e) {
			throw new Error(`Error from ChatsController: ${e}`);
		}
	}

	async addUser(data: Record<string, any>) {
		try {
			await chatApi.addUser(data);
		} catch (e) {
			throw new Error(`Error from ChatsController: ${e}`);
		}
	}

	async deleteChat(data: Record<string, any>) {
		try {
			await chatApi.deleteChat(data);
		} catch (e) {
			throw new Error(`Error from ChatsController: ${e}`);
		}
	}

	async getChatInfo(data?: Record<string, any>) {
		try {
			return await chatApi.getChats(data);
		} catch (e) {
			throw new Error(`Error from ChatsController: ${e}`);
		}
	}

	async getChatToken(data: Record<string, any>) {
		try {
			return await chatApi.getToken(data);
		} catch (e) {
			throw new Error(`Error from ChatsController: ${e}`);
		}
	}
}

export const chatController = new ChatController();
