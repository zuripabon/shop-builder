import { HttpApp } from '@/HttpApp';

(async () => {
  const httpApp = new HttpApp();
  await httpApp.up();
})();
