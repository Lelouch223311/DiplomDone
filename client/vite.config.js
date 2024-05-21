import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// const dotenv = require('dotenv');
// import { dotenv } from 'dotenv' dotenv(),

// import pkg from 'file:///D:/AWeb34/DiplomDone/client/node_modules/dotenv/lib/main.js';
// const { dotenv } = pkg;

// const require = require('esm')(module)
// const dotenv = require('dotenv')

// dotenv.config()

import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand'; // added dotenvExpand
import { join } from 'path';
// import { webpack } from 'dotenv-webpack';
import pkg from 'dotenv-webpack';
const webpack = pkg;


const env = dotenv.config({ path: join(__dirname, '.env') });
dotenvExpand(env);


// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [vue(),
    webpack({
      path: join(__dirname, '.env')
    })
  ],
})
