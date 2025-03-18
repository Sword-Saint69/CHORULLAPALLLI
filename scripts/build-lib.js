import { build } from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

build({
  entryPoints: [join(__dirname, '../src/lib/db.ts')],
  outdir: join(__dirname, '../dist/lib'),
  bundle: true,
  platform: 'node',
  format: 'esm',
  target: 'node14',
  external: ['aws-sdk', 'nock', 'sqlite3', 'bcrypt'],
}).catch(() => process.exit(1));