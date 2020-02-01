import { parseXlsFile } from './xls';

const API_BASE = 'https://destinie.reformedesretraites.fr';
// const API_BASE = 'http://52.212.241.224:5000';

export const postSimpleForm = async (values) => {
  return fetch(`${API_BASE}/basic`, {
    method: "POST",
    body: new URLSearchParams(values),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(res => res.arrayBuffer())
    .then(parseXlsFile)
    .catch(console.error);
};
