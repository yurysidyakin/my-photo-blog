import User from "../User/User";
import { MenuProps } from "./Menu.props";
import MenuList from "./MenuList/MenuList";

function Menu({ children }: MenuProps): JSX.Element {
	return (
		<>
			<MenuList />
			<User />
			{children}
		</>
	);
}

export default Menu;
