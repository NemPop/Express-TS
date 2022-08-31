import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import cookieSession from 'cookie-session';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdasfvd'] }));
app.use(router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
