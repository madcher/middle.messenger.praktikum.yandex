import { _fn } from '../../utils';
import { _state } from '../../state';
import Contact from '../../components/Contact/Contact';
import './Contacts.style.scss';

const tempContacts = [
    { avatar: 'М', name: 'Максим Иванов', day: 'Пт', text: 'some text'},
    { avatar: 'П', name: 'Паша Иванов', day: 'Пт', text: 'some text'},
    { avatar: 'Ж', name: 'Женя Иванов', day: 'Пт', text: 'some text'},
    { avatar: 'Л', name: 'Лена Иванова', day: 'Пт', text: 'some text'},
];
const Contacts = () => {
    _fn.profileOpenHandler = () => {
        _state.isProfileOpen = true;
    };

    return `
        <div class="contacts__wrapper">
            <div class="contacts__profile" onclick="_fn.profileOpenHandler()">
                <div class="contacts__profile__link">Профиль </div>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L5 5L1 1" stroke="#999999"/>
                </svg>
            </div>
            <div class="contacts__search">
                <input type="search" placeholder="Поиск" class="contacts__search-input"/>
            </div>
            <div class="contacts">
                ${tempContacts.map(contact => Contact(contact)).join('')}
            </div>
        </div>
    `;
};
export default Contacts;