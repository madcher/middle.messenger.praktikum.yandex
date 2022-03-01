import Api from '../Utils/Api';

class UserAPI extends Api {
	changeProfile(data: any) {
		return this.put('/user/profile', {data});
	}

	changePassword(data: any) {
		return this.put('/user/password', {data});
	}

	changeAvatar(data: any) {
		return this.put('/user/profile/avatar', {data});
	}

	searchUser(data: any) {
		return this.post('/user/search', {data});
	}

	getUserById(id: any) {
		return this.get(`/user/${id}`);
	}
}
const userAPI = new UserAPI();

class UserController {
	async changeProfile(data: any) {
		try {
			return await userAPI.changeProfile(data);
		} catch (e: any) {
			throw new Error(`Error from UserController: ${e.message}`);
		}
	}

	async changePassword(data: any) {
		try {
			return await userAPI.changePassword(data);
		} catch (e: any) {
			throw new Error(`Error from UserController: ${e.message}`);
		}
	}

	async changeAvatar(data: any) {
		try {
			return await userAPI.changeAvatar(data);
		} catch (e: any) {
			console.log(e);
			// throw new Error(`Error from UserController: ${e.message}`);
		}
	}

	async searchUser(data: any) {
		try {
			return await userAPI.searchUser(data);
		} catch (e: any) {
			throw new Error(`Error from UserController: ${e.message}`);
		}
	}

	async userById(id: any) {
		try {
			return await userAPI.getUserById(id);
		} catch (e: any) {
			throw new Error(`Error from UserController: ${e.message}`);
		}
	}
}

export const userController = new UserController();
