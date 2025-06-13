import { useEffect, useState } from "react";

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	useEffect(() => {
		// Проверяем наличие токена в localStorage
		const token = localStorage.getItem("token");
		setIsAuthenticated(!!token);
	}, []);

	const login = (token: string) => {
		localStorage.setItem("token", token);
		setIsAuthenticated(true);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setIsAuthenticated(false);
	};

	return {
		isAuthenticated,
		login,
		logout,
	};
};
