import { _fn } from './utils';
import Chat from "./pages/Chat/Chat";
import Contacts from "./pages/Contacts/Contacts";
import Profile from "./pages/Profile/Profile";
import './styles.scss';
import {_state} from "./state";
import Modal from "./pages/Modal/Modal";

export const App = () => {
    if (!_state.user) {
        return Modal();
    }
    if (_state.isProfileOpen) {
        return Profile();
    }
    return `
        <div class="messenger__wrapper">
            ${Contacts()}
            ${Chat()}
        </div>
    `
}
const root = document.querySelector('#root');
root.innerHTML = App();


_fn.update = () => {
    const root = document.querySelector('#root');
    root.innerHTML = App();
}

