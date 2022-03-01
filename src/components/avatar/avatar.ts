import avatarTmpl from './avatar.tmpl';
import Block from '../../Utils/Block';
import './avatar.scss';

export default class Avatar extends Block {
	constructor(props?: any) {
		super(props);
	}

	public render() {
		return this.compile(avatarTmpl, this.props);
	}
}
