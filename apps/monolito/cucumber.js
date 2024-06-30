module.exports = {
  default: {
    requireModule: ['ts-node/register', 'tsconfig-paths/register'],
    paths: ['src/**/*.feature'],
    require: ['src/**/*.steps.ts']
  }
};
