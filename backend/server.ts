import dotenv from 'dotenv';
import express from 'express';
import authRouter from './routes/authRoutes';
import path from 'path';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../frontend/public')));

app.use('/auth', authRouter);

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }, 
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj);
    return res.status(errorObj.status).send(errorObj.message);
  });
  
  const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
  });