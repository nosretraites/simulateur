import { parseXlsFile } from './xls';

const API_BASE = 'https://destinie.reformedesretraites.fr';
const NEXT_API_BASE = 'http://52.212.241.224:5000';

export const fetchCareers = async () => {
  const res = await fetch(`${NEXT_API_BASE}/fetch_carrierPaths`);

  return res.json();
};

export const postSimpleForm = async (values) => {
  const res = await fetch(`${API_BASE}/multi`, {
    method: "POST",
    body: new URLSearchParams(values),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  const blob = await res.arrayBuffer();

  return blob
};
