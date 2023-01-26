import { Request, Response } from 'express';
import listSheetService from '../services/listSheetService.service';
import sheetService from '../services/sheetService.service';

export class MainController {
  async create(req: Request, res: Response) {
    const file = req.file;

    const sheet = await sheetService(file);

    return res.status(200).json({
      message: 'Dados enviados com sucesso',
    });
  }

  async list(req: Request, res: Response) {
    const data = await listSheetService();

    return res.status(200).json(data);
  }
}
