import XLSX from "xlsx";

const SHEET_NAMES = ["emp", "retraites"];

export const parseXlsFile = (arrayBuffer) => {
  const { Sheets } = XLSX.read(new Uint8Array(arrayBuffer), {type:"array"});

  return SHEET_NAMES.reduce((acc, sheetName) => ({
    ...acc,
    [sheetName]: XLSX.utils.sheet_to_json(Sheets[sheetName])
  }), {});
}
