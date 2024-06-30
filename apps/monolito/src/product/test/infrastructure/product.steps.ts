import request from 'supertest';

import { Given, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';

import HttpApp from '@/HttpApp';

const httpApp = new HttpApp();
let httpRequest: request.Test;

BeforeAll(async () => {
  await httpApp.up();
});

AfterAll(async () => {
  await httpApp.down();
});

Given(
  'I send a POST request to {string} with body:',
  (route: string, body: string) => {
    httpRequest = request(httpApp.getHTTPServer()!)
      .post(route)
      .send(JSON.parse(body));
  }
);

Then('the response status code should be {int}', (status: number) => {
  httpRequest.expect((response) => {
    expect(response.status).toBe(status);
  });
});
