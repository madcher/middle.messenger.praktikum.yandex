import {router} from '../index';
import Api from '../Utils/Api';

class AuthAPI extends Api {
	signUp(data: Record<string, any>) {
		return this.post('/auth/signup', {data});
	}

	signIn(data: Record<string, any>) {
		return this.post('/auth/signin', {data});
	}

	getUserInfo() {
		return this.get('/auth/user');
	}

	logout() {
		return this.post('/auth/logout');
	}
}

const registrationApi = new AuthAPI();

class RegistrationController {
	async signIn(data: Record<string, any>) {
		try {
			await registrationApi.signIn(data);
			router.go('/messenger');
		} catch (e) {
			router.go('/');
		}
	}

	async signUp(data: Record<string, any>) {
		try {
			await registrationApi.signUp(data);
			router.go('/messenger');
		} catch (e) {
			router.go('/sign-up');
		}
	}

	async logout() {
		try {
			await registrationApi.logout();
			router.go('/');
		} catch (e: any) {
			throw new Error(`Error from AuthController: ${e.message}`);
		}
	}

	async getUserInfo() {
		try {
			return await registrationApi.getUserInfo();
		} catch (e) {
			return e;
			// throw new Error(`Error from AuthController: ${e.message}`);
		}
	}
}

export const registrationController = new RegistrationController();
