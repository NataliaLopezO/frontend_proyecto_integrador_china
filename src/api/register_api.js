import axios from 'axios'

export const api = axios.create({
    baseURL: 'NataliaLopez23.pythonanywhere.com'
  });


export const createuser = (foto, email1, nombre, contraseña) => {
  return api.post('/china/register/', { foto, email1, nombre, contraseña });
};

