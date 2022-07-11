module.exports = {
  name: 'child1',
  exposes: {
    './Module': 'apps/child1/src/app/remote-entry/entry.module.ts',
  },
};
