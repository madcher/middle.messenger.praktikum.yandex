import './Contact.style.scss';

const Contact = ({ avatar, name, day, text}) => {
    return `
        <div class="contact__wrapper">
            <div class="contact__avatar__wrapper">
                <div class="contact__avatar">${avatar}</div>
            </div>
            <div class="contact_name">
                ${name}
            </div>
        </div>
    `;
};

export default Contact;