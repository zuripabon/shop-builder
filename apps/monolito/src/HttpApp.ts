import { Server } from 'http';

import express, { Request, Response } from 'express';

import { FileProductRepository } from './product/infrastructure/persistence/FileProductRepository';
import { CreateProductUseCase } from './product/application/CreateProductUseCase';
import { CreateProductQuery } from './product/application/CreateProductQuery';

export class HttpApp {
  private app: express.Express;
  private httpServer?: Server;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    // Health check route
    this.app.get('/health', (_req: Request, res: Response) => {
      res.status(200).send({ status: 'UP' });
    });

    this.app.post('/product', async (req: Request, res: Response) => {
      const createProductUseCase = new CreateProductUseCase(
        new FileProductRepository()
      );
      const { id, title, description, price, imageUrl } = req.body;
      await createProductUseCase.execute(
        new CreateProductQuery(id, title, description, price, imageUrl)
      );
      res.status(200).end();
    });
  }

  async up() {
    const port = process.env.PORT || 3000;

    this.httpServer = await this.app.listen(port);

    console.log(`Server is running on port ${port}`);

    process.on('SIGINT', () => {
      console.log('Server is stopping');
      this.down();
    });
  }

  async down() {
    if (!this.httpServer) {
      return;
    }
    this.httpServer.close();
  }

  getHttpServer() {
    return this.httpServer;
  }
}
