import * as Handlebars from 'handlebars';
import chat from './chat.tmpl';
import './chat.scss';

Handlebars.registerPartial('chat', chat);

export default chat;
