import * as fs from 'fs';
import { fakeDatabase } from '../database/fakeDatabase';

const listSheetService = async () => {
  console.log(fakeDatabase.length);
  return fakeDatabase;
};

export default listSheetService;
