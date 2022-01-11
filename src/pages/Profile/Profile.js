import './Profile.styles.scss';
import { _state } from "../../state";
import {_fn} from "../../utils";

const Profile = () => {
    _fn.closeProfileHandler= () => {
        _state.isProfileOpen = false;
    };
    _fn.logOff = () => {
        _state.user = null;
    };

    return `
        <div class="profile__wrapper">
            <div class="profile__back-panel" onclick="_fn.closeProfileHandler()">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
                    <rect x="20" y="14.8" width="11" height="1.6" transform="rotate(-180 20 14.8)" fill="white"/>
                    <path d="M13 19L9 14L13 9" stroke="white" stroke-width="1.6"/>
                </svg>
            </div>
            <div class="profile">
                <div class="user-info">
                    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="65" cy="65" r="65" fill="#EFEFEF"/>
                        <rect x="46" y="46" width="38" height="38" rx="3" stroke="#3369F3" stroke-width="2"/>
                        <path d="M46 81V70.5L59.6547 67.3139C60.5486 67.1053 61.4635 67 62.3814 67H67.6186C68.5365 67 69.4514 67.1053 70.3453 67.3139L84 70.5V81H46Z" fill="#3369F3" stroke="#3369F3"/>
                    </svg>
                    <div class="user-info__name">${_state.user.name}</div>
                    <div  class="user-info__filed">
                        <div>Почта</div>
                        <div class="user-info__value">${_state.user.email}</div>
                    </div>
                    <div  class="user-info__filed">
                        <div>Логин</div>
                        <div class="user-info__value">${_state.user.login}</div>
                    </div>
                    <div  class="user-info__filed">
                        <div>Имя</div>
                        <div class="user-info__value">${_state.user.name}</div>
                    </div>
                    <div  class="user-info__filed">
                        <div>Фамилия</div>
                        <div class="user-info__value">${_state.user.surname}</div>
                    </div>
                    <div  class="user-info__filed">
                        <div>Телефон</div>
                        <div class="user-info__value">${_state.user.phone}</div>
                    </div>
                    <div class="user-info__logout" onclick="_fn.logOff()">Выйти</div>
                </div>
            </div>
        </div>
    `;
};

export default Profile;