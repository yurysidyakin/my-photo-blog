import { useEffect, useState } from "react";

function parseJwt(token: string | null) {
	if (!token) return null;
	try {
		const base64Url = token.split(".")[1];
		const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
		const jsonPayload = decodeURIComponent(
			atob(base64)
				.split("")
				.map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
				.join(""),
		);
		return JSON.parse(jsonPayload);
	} catch {
		return null;
	}
}

export const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [name, setName] = useState<string | null>(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		setIsAuthenticated(!!token);

		if (token) {
			const payload = parseJwt(token);
			if (payload?.name) {
				setName(payload.name);
				localStorage.setItem("name", payload.name);
			} else {
				setName(null);
				localStorage.removeItem("name");
			}
		} else {
			setName(null);
			localStorage.removeItem("name");
		}
	}, []);

	const login = (token: string) => {
		localStorage.setItem("token", token);
		const payload = parseJwt(token);
		if (payload?.name) {
			localStorage.setItem("name", payload.name);
			setName(payload.name);
		} else {
			setName(null);
			localStorage.removeItem("name");
		}
		setIsAuthenticated(true);
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("name");
		setIsAuthenticated(false);
		setName(null);
	};

	return {
		isAuthenticated,
		name,
		login,
		logout,
	};
};
