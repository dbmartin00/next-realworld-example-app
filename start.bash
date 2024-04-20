#!/bin/bash
set -x
export NODE_OPTIONS=--openssl-legacy-provider node your-script.js
npm run dev
