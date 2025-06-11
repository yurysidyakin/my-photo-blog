import axios, { AxiosInstance } from "axios";
import { IPhoto } from "../interfaces/photo.interface";

export const API_URL = "http://localhost:3000/api";

export const api: AxiosInstance = axios.create({
	baseURL: API_URL,
});

export const fetchPhotos = async (): Promise<IPhoto[]> => {
	try {
		const response = await api.get("/main");
		return response.data;
	} catch (error) {
		console.error("Ошибка при загрузке фото:", error);
		throw error;
	}
};
