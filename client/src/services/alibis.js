import api from './apiConfig';

export const getAllAlibis = async () => {
  const resp = await api.get('/alibis');
  return resp.data;
}

export const getOneAlibi = async (id) => {
  const resp = await api.get(`/alibis/${id}`);
  return resp.data;
}

export const postAlibi = async (alibiData) => {
  const resp = await api.post('/alibis', { alibi: alibiData });
  return resp.data;
}

export const putAlibi = async (id, alibiData) => {
  const resp = await api.put(`/alibis/${id}`, { alibi: alibiData });
  return resp.data;
}

export const destroyAlibi = async (id) => {
  const resp = await api.delete(`/alibis/${id}`);
  return resp;
}