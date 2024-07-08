/* eslint-disable no-await-in-loop */
import { EnvironmentArranger } from './EnvironmentArranger';
import { TestEnvironmentHttpArranger } from './TestEnvironmentHttpArranger';

export class TestEnvironmentArranger implements EnvironmentArranger {
  httpArranger: TestEnvironmentHttpArranger = new TestEnvironmentHttpArranger();

  async before() {
    await this.httpArranger.before();
  }

  async after() {
    await this.httpArranger.after();
  }
}
