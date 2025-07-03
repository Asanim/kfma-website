import { defineFunction } from '@aws-amplify/backend';

export const dataMigration = defineFunction({
  name: 'dataMigration',
  entry: './data-migration-handler.ts',
});
