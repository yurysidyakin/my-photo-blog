import axios, { AxiosInstance } from "axios";
import { IPhoto } from "../interfaces/photo.interface";

// export const BASE_URL: string = "http://localhost:3000/api";

// export const fetchPhotos = async (): Promise<IPhoto[]> => {
// 	const response = await fetch(`${BASE_URL}/main`);
// 	if (!response.ok) {
// 		throw new Error("Фотографии не найдены");
// 	}
// 	return response.json();
// };

// Создаем экземпляр axios с базовым URL
export const BASE_URL: AxiosInstance = axios.create({
	baseURL: "http://localhost:3000/api",
});

// GET-запрос для получения всех фото
export const fetchPhotos = async (): Promise<IPhoto[]> => {
	try {
		const response = await BASE_URL.get("/main");
		return response.data;
	} catch (error) {
		console.error("Ошибка при загрузке фото:", error);
		throw error;
	}
};
