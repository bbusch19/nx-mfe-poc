module.exports = {
  name: 'default-child',
  exposes: {
    './Module': 'apps/default-child/src/app/remote-entry/entry.module.ts',
  },
};
