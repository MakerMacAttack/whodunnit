import api from './apiConfig';

export const getAllSuspects = async () => {
  const resp = await api.get('/suspects');
  return resp.data;
}

export const getOneSuspect = async (id) => {
  const resp = await api.get(`/suspects/${id}`);
  return resp.data;
}

export const postSuspect = async (suspectData) => {
  const resp = await api.post('/suspects', { suspect: suspectData });
  return resp.data;
}

export const putSuspect = async (id, suspectData) => {
  const resp = await api.put(`/suspects/${id}`, { suspect: suspectData });
  return resp.data;
}

export const destroySuspect = async (id) => {
  const resp = await api.delete(`/suspects/${id}`);
  return resp;
}