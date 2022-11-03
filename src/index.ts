import express from 'express';
import { router as pingRoutes } from './routes/v1/ping.routes'

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/api', pingRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
})
