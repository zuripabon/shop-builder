import express, { Request, Response } from 'express';

import { FileProductRepository } from './product/infrastructure/persistence/FileProductRepository';
import { CreateProductUseCase } from './product/application/CreateProductUseCase';

const app = express();
const port = process.env.PORT || 3000;

// Health check route
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send({ status: 'UP' });
});

app.post('/product', async (_req: Request, res: Response) => {
  const createProductUseCase = new CreateProductUseCase(
    new FileProductRepository()
  );
  await createProductUseCase.execute();
  res.status(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
