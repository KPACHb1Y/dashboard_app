import express, { Express, Request, Response } from "express";

const app: Express = express();

const PORT = process.env.PORT || 5000;

app.get('/api', (req: Request, res: Response) => {
    res.send('Server work');
});

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))