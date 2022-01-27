import './Contact.style.scss';

const Contact = ({ avatar, name, day, text }: any) => {
	return `
        <div class="contact__wrapper">
            <div class="contact__avatar-wrapper">
                <div class="contact__avatar">${avatar}</div>
            </div>
            <div class="contact__info">
                <div class="contact__name">
                    ${name}
                </div>
                <div class="contact__text">
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
