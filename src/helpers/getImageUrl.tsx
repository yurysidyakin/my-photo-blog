export const getImageUrl = (path: string, apiBase: string) => {
	return path.startsWith("http") ? path : `${apiBase}/${path.replace(/^\/+/, "")}`;
};
