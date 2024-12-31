import User from "../User/User";
import { MenuProps } from "./Menu.props";
import MenuList from "./MenuList/MenuList";

function Menu({ children }: MenuProps) {
	return (
		<>
			<MenuList />
			<User />
			{children}
		</>
	);
}

export default Menu;
