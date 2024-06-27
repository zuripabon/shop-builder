import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Health check route
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send({ status: 'UP' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
