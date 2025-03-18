const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const { hash, compare } = require('bcrypt');

const SALT_ROUNDS = 10;

export interface Admin {
  id: number;
  email: string;
  password: string;
  created_at: string;
}

export const initializeDb = async () => {
  const db = await open({
    filename: './admin.db',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
};

export const createAdmin = async (email: string, password: string) => {
  const db = await initializeDb();
  const hashedPassword = await hash(password, SALT_ROUNDS);
  
  try {
    await db.run(
      'INSERT INTO admins (email, password) VALUES (?, ?)',
      [email, hashedPassword]
    );
    return true;
  } catch (error) {
    console.error('Error creating admin:', error);
    return false;
  } finally {
    await db.close();
  }
};

export const validateAdmin = async (email: string, password: string) => {
  const db = await initializeDb();
  
  try {
    const admin = await db.get<Admin>('SELECT * FROM admins WHERE email = ?', [email]);
    if (!admin) return false;
    
    const isValid = await compare(password, admin.password);
    return isValid;
  } catch (error) {
    console.error('Error validating admin:', error);
    return false;
  } finally {
    await db.close();
  }
};