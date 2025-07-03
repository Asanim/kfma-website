import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { sendContactEmail } from './functions/send-contact-email/resource';
import { dataMigration } from './functions/data-migration/resource';

defineBackend({
  auth,
  data,
  storage,
  sendContactEmail,
  dataMigration,
});
