import express, { Request, Response } from 'express';

import { FileProductRepository } from './product/infrastructure/persistence/FileProductRepository';
import { CreateProductUseCase } from './product/application/CreateProductUseCase';
import { CreateProductQuery } from './product/application/CreateProductQuery';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Health check route
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).send({ status: 'UP' });
});

app.post('/product', async (req: Request, res: Response) => {
  const createProductUseCase = new CreateProductUseCase(
    new FileProductRepository()
  );
  const { id, title, description, price, imageUrl } = req.body;
  await createProductUseCase.execute(
    new CreateProductQuery(id, title, description, price, imageUrl)
  );
  res.status(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
