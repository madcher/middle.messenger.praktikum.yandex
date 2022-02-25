import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Profile from './pages/Profile/Profile';
import Chats from './pages/Chats/Chats';
import Router from './utils/Router';
import './scss/styles.scss';

const TAG = '#output';

const router = new Router(TAG);

router
	.use('/', Login)
	.use('/login', Login)
	.use('/chats', Chats)
	.use('/profile', Profile)
	.use('/registration', Registration)
	.start();
