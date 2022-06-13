import express, { Application, Request, Response, NextFunction} from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
// Crear la conexión a la BD
import db from "./config/db";
// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos
import cors from 'cors';

db.sync()
    .then(() => console.log('Conectado al Servidor'))
    .catch(error => console.log(error));

// crear el servidor
const app: Application = express();
app.use(express.json());

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
// Add a list of allowed origins.
const allowedOrigins = ['*'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));


const PORT = 3000;

// Rutas de la app
app.use('/api/v1', routes);

app.use((err:Error,_req:Request,res: Response,_next:NextFunction) => {
  res.status(500).json({
    success:false,
    message: err.message
  })
})
// carpeta publica
app.use(express.static('./assets/uploads'));

app.listen(PORT);