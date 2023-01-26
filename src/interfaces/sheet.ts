import { number, string } from 'yup';

export interface IFileRequest {
  fieldname: string;
  originalName: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}
