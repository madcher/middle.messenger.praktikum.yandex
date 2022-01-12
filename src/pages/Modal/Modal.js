import { _fn } from '../../utils';
import { _state } from '../../state';
import './Modal.style.scss';

export const Login = () => {
    _fn.submitHandler = (e) => {
        e.preventDefault();
        const {login, password} = e.target.elements;
        _state.user = {
            login: login.value,
            password: password.value,
            email: 'pochta@yandex.ru',
            name: 'Иван',
            surname: 'Иванов',
            phone: '+7(909)9673030',
        };
        _state.modalOpen = false;
    };
    _fn.registrationHandler = () => {
        _state.isNotRegistred = true;
    };

    return `
        <div>Вход</div>
        <form onsubmit="_fn.submitHandler(event)" class="modal__form">
            <input type="text" name="login" placeholder="логин" required="required"/>
            <input type="password" name="password" placeholder="пароль" required="required"/>
            <button type="submit">Авторизоваться</button>
        </form>
        <div onclick="_fn.registrationHandler()" class="modal__no-account">Нет аккаунта ?</div>
    `;
};

export const Registration = () => {
    _fn.submitHandler = (e) => {
        e.preventDefault();
        const {email, login, name, surname, phone, password1, password2 } = e.target.elements;
        if (password1.value !== password2.value) {
            alert('пароли не совпадают')
            return;
        }

        _state.user = {
            email: email.value,
            login: login.value,
            name: name.value,
            surname: surname.value,
            phone: phone.value,
            password: password1.value,
        };
        _state.modalOpen = false;
        _state.isNotRegistred = false;
    };

    return `
        <div>Регистрация</div>
        <form onsubmit="_fn.submitHandler(event)" class="modal__form">
            <input type="email" name="email" placeholder="почта" required="required"/>
            <input type="text" name="login" placeholder="логин" required="required"/>
            <input type="text" name="name" placeholder="имя" required="required"/>
            <input type="text" name="surname" placeholder="фамилия" required="required"/>
            <input type="tel" name="phone" placeholder="телефон" required="required"/>
            <input type="password" name="password1" placeholder="пароль" required="required"/>
            <input type="password" name="password2" placeholder="пароль" required="required"/>
            <button type="submit">Зарегистрироваться</button>
        </form>
    `;
};

const Modal = () => {
    _fn.headerCloseHandler = (e) => {
        if (e.target === e.currentTarget) {
            _state.modalOpen = false;
        }
    };

    return `
        <div class="modal_background"></div>
        <div onclick="_fn.headerCloseHandler(event)" class="modal_wrapper">
            <div class="modal">
                ${_state.isNotRegistred ? Registration() : Login()}
            </div>
        </div>
    `;
};

export default Modal
