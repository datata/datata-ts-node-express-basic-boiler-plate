import express from 'express';
import { ping } from './controllers/ping.controller';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', ping)

app.listen(PORT, ()=>{
    console.log(`Server listening on port: ${PORT}`);
})
