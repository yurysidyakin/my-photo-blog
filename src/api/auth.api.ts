import { AxiosError } from "axios";
import { ILoginData, IRegisterData } from "../interfaces/auth.interface";
import { api } from "./api";

export const login = async (data: ILoginData) => {
	const { data: response } = await api.post("/auth/login", data);
	return response;
};

export const register = async (data: IRegisterData) => {
	console.log("Отправляем данные на сервер:", JSON.stringify(data, null, 2));
	try {
		const { data: response } = await api.post("/auth/register", data);
		return response;
	} catch (error) {
		if (error instanceof AxiosError) {
			console.error("Ошибка при регистрации:", {
				status: error.response?.status,
				statusText: error.response?.statusText,
				data: error.response?.data,
				config: error.config,
			});
		}
		throw error;
	}
};
