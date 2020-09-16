
import dotenv from 'dotenv';
dotenv.config({ path: __dirname+'/.env'});

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import session from 'express-session';
import postsRoutes from './routes/posts';
import usersRoutes from './routes/users';
import AuthRoutes from './routes/auth';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));
app.use('/api', postsRoutes);
app.use('/api', usersRoutes);
app.use('/api', AuthRoutes);

const URI: any = process.env.API_MONGODB_URI;
const PORT: any = process.env.API_SERVER_PORT;

mongoose.connect(URI, { useNewUrlParser: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Running!!`);
  });
});
