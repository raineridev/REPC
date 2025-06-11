import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/:id', (req: Request, res: Response) => {
    const productID = req.params.id;
    res.send(`${productID}`);
});

export default app; 