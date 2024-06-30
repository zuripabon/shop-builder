import HttpApp from './HttpApp';

(async function init() {
  const httpApp = new HttpApp();
  await httpApp.up();
})();
