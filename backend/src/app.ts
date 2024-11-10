import express from 'express';

import customerRouter from './routes/customerRouter';
import { setupDbForDev } from './infra/database';
import { errorHandler } from './middlewares/errors';

const app = express();

app.use(express.json());
app.use(customerRouter);
app.use(errorHandler);

setupDbForDev();

export default app;
