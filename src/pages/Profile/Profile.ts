import profileTmpl from './Profile.tmpl';
import { PROFILE_DATA } from './Profile.data';
import Block from '../../Utils/Block';
import './Profile.scss';

export default class Profile extends Block {
	constructor(props?: any) {
		super(props);
	}

	componentDidMount() {
		this.setProps(PROFILE_DATA);
	}

	public render() {
		return this.compile(profileTmpl, this.props);
	}
}
