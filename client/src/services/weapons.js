import api from './apiConfig';

export const getAllWeapons = async () => {
  const resp = await api.get('/weapons');
  return resp.data;
}

export const getOneWeapon = async (id) => {
  const resp = await api.get(`/weapons/${id}`);
  return resp.data;
}

export const postWeapon = async (weaponData) => {
  const resp = await api.post('/weapons', { weapon: weaponData });
  return resp.data;
}

export const putWeapon = async (id, weaponData) => {
  const resp = await api.put(`/weapons/${id}`, { weapon: weaponData });
  return resp.data;
}

export const destroyWeapon = async (id) => {
  const resp = await api.delete(`/weapons/${id}`);
  return resp;
}