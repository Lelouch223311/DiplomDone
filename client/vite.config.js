import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { join } from 'path';
// import { webpack } from 'dotenv-webpack';

const env = dotenv.config({ path: join(__dirname, '.env') });
// dotenvExpand(env);

export default defineConfig({
  base: '/<REPO>/',
  plugins: [vue(),
    // webpack({
    //   path: join(__dirname, '.env')
    // })
  ]
});
