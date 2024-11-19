import express from 'express';
import cors from 'cors';
import router from './routes/routes.js'
import db from './database/db.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});

const startServer = async () => {
    try {
        await db.sync()
        app.listen(process.env.PORT)
        console.log(`App escuchando en el puerto: ${process.env.PORT}`)
    } catch (error) {
        console.error('no se conecto la bd')
    }
};

startServer();
