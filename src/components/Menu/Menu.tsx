import { useAuth } from "../../hooks/useAuth";
import User from "../User/User";
import { MenuProps } from "./Menu.props";
import MenuList from "./MenuList/MenuList";

function Menu({ children }: MenuProps): JSX.Element {
	const { name } = useAuth();
	return (
		<>
			<MenuList />
			<User name={name || undefined} />
			{children}
		</>
	);
}

export default Menu;
