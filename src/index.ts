import http from 'http';
import express, { Request, Response } from "express";
let app: any = express();
app.use('/', (req: Request, res: Response) => {
  res.send('<h1>Express!</h1>');
})
let server = http.createServer(app);
server.listen(3000, '0.0.0.0', () => {
  console.log('server started, http://localhost:3000');
})