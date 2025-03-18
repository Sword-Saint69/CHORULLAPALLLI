import { createAdmin } from '../dist/lib/db.js';
import dotenv from 'dotenv';

dotenv.config();

const adminEmail = process.env.VITE_ADMIN_EMAIL;
const adminPassword = process.env.VITE_ADMIN_PASSWORD;

if (!adminEmail || !adminPassword) {
  console.error('Admin credentials not found in environment variables');
  process.exit(1);
}

createAdmin(adminEmail, adminPassword)
  .then((success) => {
    if (success) {
      console.log('Admin user created successfully!');
      process.exit(0);
    } else {
      console.error('Failed to create admin user');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });