/* eslint-disable no-await-in-loop */
import { HttpApp } from '@/HttpApp';

import { EnvironmentArranger } from './EnvironmentArranger';

export class TestEnvironmentHttpArranger implements EnvironmentArranger {
  private readonly httpApp: HttpApp = HttpApp.create();

  async before() {
    await this.httpApp.up();
  }

  async after() {
    await this.httpApp.down();
  }
}
