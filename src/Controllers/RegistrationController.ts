import {router} from '../index';
import Api from '../utils/Api';

const registrationApi = new Api();

class RegistrationController {
	async signIn(data: any) {
		const {
			login,
			password,
		} = data;
		const reqData = {
			login,
			password,
		};
		try {
			const result = await registrationApi.post('/auth/signin', {data: reqData});
			console.log(result);
			router.go('/chats');
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
			const result = await registrationApi.post('/auth/signup', {data: reqData});
			console.log(result);
			router.go('/chats');
		} catch (e) {
			router.go('/registration');
		}
	}

	async logout() {
		try {
			const result = await registrationApi.post('/auth/logout');
			console.log(result);
			router.go('/login');
		} catch (e: any) {
			throw new Error(`Error from AuthController: ${e.message}`);
		}
	}

	async getUserInfo() {
		try {
			const result = await registrationApi.get('/auth/user');
			console.log(result);
		} catch (e) {
			return e;
			// throw new Error(`Error from AuthController: ${e.message}`);
		}
	}
}

export const registrationController = new RegistrationController();
