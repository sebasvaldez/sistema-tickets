import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';

const app= express();


//me sirve para porder ver msjs por consola
app.use(morgan('dev'));

//sirve para que el servidor pueda interpretar los json que le llegan desde req.body
app.use(express.json());


app.use("/api",authRoutes);


export default app;