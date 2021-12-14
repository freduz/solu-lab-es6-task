import express from 'express';
import userRoute from './routes/userRoutes';
import dbconfig from './config/dbconfig';
import errorHandler from './middlewares/errorHandler';

import { APP_PORT } from './config';

dbconfig();
const app = express();

app.use(express.json());

app.use('/api/v1/users', userRoute);

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`Listening on port ${APP_PORT}`);
});
