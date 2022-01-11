import { App } from "./index";

const initialState = {
    count: 1,
    route: '',
    modalOpen: false,
    user: null,
    isNotRegistred: false,
    isProfileOpen: false,
};


const update = () => {
    const fn = () => '';
    const content = App || fn;
    const root = document.querySelector('#root');
    root.innerHTML = content();
}

export const _state = new Proxy(initialState, {
    set(target, property, value) {
        target[property] = value;
        update();
        return true;
    }
});