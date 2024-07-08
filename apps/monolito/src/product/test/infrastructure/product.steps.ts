import assert from 'assert';

import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';

import { TestEnvironmentArranger } from './TestEnvironmentArranger';

const testEnvironmentArranger = new TestEnvironmentArranger();
let httpResponse: request.Response;

BeforeAll(async () => {
  await testEnvironmentArranger.before();
});

AfterAll(async () => {
  await testEnvironmentArranger.after();
});

Given(
  'I send a POST request to {string} with payload:',
  async (route: string, payload: string) => {
    httpResponse = await request(
      testEnvironmentArranger.httpArranger.httpApp.getHttpServer()!
    )
      .post(route)
      .send(JSON.parse(payload));
  }
);

Then('the response status code should be {int}', (status: number) => {
  assert.equal(httpResponse.status, status);
});
