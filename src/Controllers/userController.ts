import Api from '../Utils/Api';

class UserAPI extends Api {
	changeProfile(data: Record<string, any>) {
		return this.put('/user/profile', {data});
	}

	changePassword(data: Record<string, any>) {
		return this.put('/user/password', {data});
	}

	changeAvatar(data: Record<string, any>) {
		return this.put('/user/profile/avatar', {data});
	}

	searchUser(data: Record<string, any>) {
		return this.post('/user/search', {data});
	}

	getUserById(id: Record<string, any>) {
		return this.get(`/user/${id}`);
	}
}
const userAPI = new UserAPI();

class UserController {
	async changeProfile(data: Record<string, any>) {
		try {
			return await userAPI.changeProfile(data);
		} catch (e) {
			throw new Error(`Error from UserController: ${e}`);
		}
	}

	async changePassword(data: Record<string, any>) {
		try {
			return await userAPI.changePassword(data);
		} catch (e) {
			throw new Error(`Error from UserController: ${e}`);
		}
	}

	async changeAvatar(data: Record<string, any>) {
		try {
			return await userAPI.changeAvatar(data);
		} catch (e) {
			console.log(e);
			// throw new Error(`Error from UserController: ${e.message}`);
		}
	}

	async searchUser(data: Record<string, any>) {
		try {
			return await userAPI.searchUser(data);
		} catch (e) {
			throw new Error(`Error from UserController: ${e}`);
		}
	}

	async userById(id: Record<string, any>) {
		try {
			return await userAPI.getUserById(id);
		} catch (e) {
			throw new Error(`Error from UserController: ${e}`);
		}
	}
}

export const userController = new UserController();
