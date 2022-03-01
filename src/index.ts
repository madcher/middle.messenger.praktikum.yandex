import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Profile from './pages/Profile/Profile';
import Chats from './pages/Chats/Chats';
import Router from './Utils/Router';
import Error from './pages/Error/Error';
import ChangePassword from './pages/ChangePassword/ChangePassword';
import './scss/styles.scss';

const TAG = '#output';

export const router = new Router(TAG);

router
	.use('/', Login)
	.use('/messenger', Chats)
	.use('/settings', Profile)
	.use('/sign-up', Registration)
	.use('/settings/change-password', ChangePassword)
	.use('/error', Error)
	.start();
