const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'client', 'out');
const dest = path.join(__dirname, '..', 'server', 'public');

if (!fs.existsSync(src)) {
  console.error('Client build output not found at', src);
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });

console.log('Copied client build to server/public');
