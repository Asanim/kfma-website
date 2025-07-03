import { defineFunction } from '@aws-amplify/backend';

export const sendContactEmail = defineFunction({
  name: 'sendContactEmail',
  entry: './send-contact-email-handler.ts',
  environment: {
    ADMIN_EMAIL: 'admin@kfma.com.au', // Replace with actual admin email
  },
});
