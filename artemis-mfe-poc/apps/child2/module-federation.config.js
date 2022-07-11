module.exports = {
  name: 'child2',
  exposes: {
    './Module': 'apps/child2/src/app/remote-entry/entry.module.ts',
  },
};
