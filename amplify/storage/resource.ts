import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'kfmaFiles',
  access: (allow) => ({
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read']),
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read', 'write']),
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write']),
    ],
    'admin/*': [
      allow.groups(['admin']).to(['read', 'write', 'delete']),
    ],
  }),
});
