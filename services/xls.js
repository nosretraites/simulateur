import xlsx from 'xlsx';

export const parseXlsFile = (arrayBuffer) => {
  const data = xlsx.read(new Uint8Array(arrayBuffer), {type:"array"});

  console.log(data);
  return data;
}
