import './Contact.style.scss';

const Contact = ({ avatar, name, day, text}) => {
    return `
        <div class="contact__wrapper">
            <div class="contact__avatar-wrapper">
                <div class="contact__avatar">${avatar}</div>
            </div>
            <div class="contact_info">
                <div class="contact_name">
                    ${name}
                </div>
                <div class="contact_text">
                    ${text}
                </div>
            </div>
            <div class="contact__time">
                ${day}
            </div>
        </div>
    `;
};

export default Contact;