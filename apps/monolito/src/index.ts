import express, { Request, Response } from 'express';

import { FileProductRepository } from '@/product/infrastructure/persistence/FileProductRepository';
import { CreateProductUseCase } from '@/product/application/CreateProductUseCase';
import { CreateProductQuery } from '@/product/application/CreateProductQuery';

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
  await createProductUseCase.execute(
    new CreateProductQuery(
      req.body.id,
      req.body.title,
      req.body.description,
      req.body.price,
      req.body.imageUrl
    )
  );
  res.status(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
