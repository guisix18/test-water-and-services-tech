import express from 'express';

import routes from './routes/routes';

let cors = require('cors');
const app = express();

app.use(routes);

export default app;
