import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { join } from 'path';
import { webpack } from 'dotenv-webpack';

const env = dotenv.config({ path: join(__dirname, '.env') });
dotenvExpand(env);

export default defineConfig({
  plugins: [
    webpack({
      path: join(__dirname, '.env')
    })
  ]
});
