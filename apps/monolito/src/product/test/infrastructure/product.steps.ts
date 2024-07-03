import assert from 'assert';

import request from 'supertest';
import { Given, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';

import HttpApp from '@/HttpApp';

const httpApp = new HttpApp();
let httpResponse: request.Response;

BeforeAll(async () => {
  await httpApp.up();
});

AfterAll(async () => {
  await httpApp.down();
});

Given(
  'I send a POST request to {string} with body:',
  async (route: string, body: string) => {
    httpResponse = await request(httpApp.getHTTPServer()!)
      .post(route)
      .send(JSON.parse(body));
  }
);

Then('the response status code should be {int}', (status: number) => {
  assert.equal(httpResponse.status, status);
});
