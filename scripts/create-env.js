const fs = require('fs');

fs.writeFileSync('./.env', `APPID=${process.env.APPID}\n`);