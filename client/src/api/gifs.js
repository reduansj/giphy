import api from "./api";

//!GET ALL GIFS
export const getGifs = async () => {
  const response = await api.get("/");
  return response.data;
};
//!GET ALL GIF BY ID
export const getGifById = async (id) => {
  const response = await api.get(`/gif/${id}`);
  return response.data;
};
//!GET ALL GIF BY ID
export const getGifByGenre = async (genre) => {
  const response = await api.get(`/genre/${genre}`);
  return response.data;
};
//!POST GIF
export const createGif = async (data) => {
  const response = await api.post("/", data);
  return response.data;
};
//!UPDATE GIF
export const updateGif = async (data) => {
  const response = await api.put(`/${data.id}`, data.gifData);
  return response.data;
};
//!DELETE GIF
export const deleteGif = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
