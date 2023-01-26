import { Router } from 'express';
import multer from 'multer';
import { MainController } from '../controllers/mainController.controller';
import { storage } from '../multerConfig';

const upload = multer({ storage: storage });

const routes = Router();
const mainController = new MainController();

routes.post('/upload', upload.single('excel'), mainController.create);
routes.get('/upload', mainController.list);

export default routes;
