import Api from '../Utils/Api';

class ChatsAPI extends Api {
	createChat(data: any) {
		return this.post('/chats', {data});
	}

	addUser(data: any) {
		return this.put('/chats/users', {data});
	}

	deleteChat(data: any) {
		return this.delete('/chats', {data});
	}

	getChats(data: any) {
		return this.get('/chats', {data});
	}

	getToken(id: any) {
		return this.post(`/chats/token/${id}`);
	}
}
const chatApi = new ChatsAPI();

class ChatController {
	async createChat(data: any) {
		try {
			return await chatApi.createChat(data);
		} catch (e: any) {
			throw new Error(`Error from ChatsController: ${e.message}`);
		}
	}

	async addUser(data: any) {
		try {
			await chatApi.addUser(data);
		} catch (e: any) {
			throw new Error(`Error from ChatsController: ${e.message}`);
		}
	}

	async deleteChat(data: any) {
		try {
			await chatApi.deleteChat(data);
		} catch (e: any) {
			throw new Error(`Error from ChatsController: ${e.message}`);
		}
	}

	async getChatInfo(data?: any) {
		try {
			return await chatApi.getChats(data);
		} catch (e: any) {
			throw new Error(`Error from ChatsController: ${e.message}`);
		}
	}

	async getChatToken(data: any) {
		try {
			return await chatApi.getToken(data);
		} catch (e: any) {
			throw new Error(`Error from ChatsController: ${e.message}`);
		}
	}
}

export const chatController = new ChatController();
