import * as http from 'http';

import express, { Request, Response } from 'express';

import { FileProductRepository } from '@/product/infrastructure/persistence/FileProductRepository';
import { CreateProductUseCase } from '@/product/application/CreateProductUseCase';
import { CreateProductQuery } from '@/product/application/CreateProductQuery';

export default class HttpApp {
  private app: express.Express;
  private httpServer?: http.Server;

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
      await createProductUseCase.execute(
        new CreateProductQuery(
          req.body.id,
          req.body.title,
          req.body.description,
          req.body.price,
          req.body.imageUrl
        )
      );
      res.status(200).end();
    });
  }

  async up() {
    const port = process.env.PORT || 3000;
    this.httpServer = await this.app.listen(port);
    console.log(`Server is running on port ${port}`);
    process.on('SIGINT', () => this.down());
  }

  async down() {
    if (!this.httpServer) {
      return;
    }
    await this.httpServer.close();
  }

  getHTTPServer() {
    return this.httpServer;
  }
}
