import express from 'express';
import userRoute from './routes/userRoutes';
import dbconfig from './config/dbconfig';

import { APP_PORT } from './config';

dbconfig();
const app = express();

app.use(express.json());

app.use('/api/v1/users', userRoute);

app.listen(APP_PORT, () => {
  console.log(`Listening on port ${APP_PORT}`);
});
