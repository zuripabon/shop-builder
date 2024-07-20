import { HttpApp } from '@/HttpApp';

(async () => {
  const httpApp = HttpApp.create();
  await httpApp.up();
})();
