import axios, { AxiosInstance } from "axios";
import { IPhoto } from "../interfaces/photo.interface";

export const API_URL = "http://localhost:3000/api";

export const api: AxiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

// Добавляем перехватчик запросов для установки токена
api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

// Добавляем перехватчик ответов для логирования
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) {
			// Сервер ответил с кодом ошибки
			console.error("Ответ сервера:", error.response.data);
			console.error("Статус:", error.response.status);
		} else if (error.request) {
			// Запрос был отправлен, но ответ не получен
			console.error("Нет ответа от сервера:", error.request);
		} else {
			// Ошибка при настройке запроса
			console.error("Ошибка:", error.message);
		}
		return Promise.reject(error);
	},
);

export const fetchPhotos = async (): Promise<IPhoto[]> => {
	try {
		const response = await api.get("/main");
		return response.data;
	} catch (error) {
		console.error("Ошибка при загрузке фото:", error);
		throw error;
	}
};
