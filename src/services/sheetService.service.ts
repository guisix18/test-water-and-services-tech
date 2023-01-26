import * as xlsx from 'xlsx';
import * as fs from 'fs';
import { fakeDatabase } from '../database/fakeDatabase';

const sheetService = async (
  file: Express.Multer.File | undefined,
): Promise<void> => {
  const readFile = xlsx.readFile(file?.path!);
  const sheet = readFile.Sheets[readFile.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet);

  const dataString = JSON.stringify(data);

  fs.writeFileSync(`${file?.originalname!}.txt`, dataString);
  fakeDatabase.push(dataString);
};

export default sheetService;
